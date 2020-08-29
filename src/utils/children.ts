import { types } from 'util'

import { ChatiumBlock } from '../blocks'

export async function flattenChildren<ExtraActions>(
  children: ChatiumChildNode<ExtraActions>[],
): Promise<ChatiumBlock<ExtraActions>[]> {
  const result: ChatiumBlock<ExtraActions>[] = []
  await flattenChildrenRec(children, '', result)
  return result
}

async function flattenChildrenRec<ExtraActions>(
  children: ChatiumChildNode<ExtraActions>[],
  prevLevelKey: string,
  result: ChatiumBlock<ExtraActions>[],
): Promise<void> {
  let idx = 0
  for (const b of children) {
    await flattenChildRec(b, prevLevelKey, idx, result)
    idx++
  }
}

async function flattenChildRec<ExtraActions>(
  child: ChatiumChildNode<ExtraActions>,
  prevLevelKey: string,
  idx: number,
  result: ChatiumBlock<ExtraActions>[],
): Promise<void> {
  // skip falsy nodes
  if (child) {
    if (isPromise(child)) {
      const sync = await child
      if (sync instanceof Array) {
        await flattenChildrenRec(sync, prevLevelKey + encodeIndex(idx), result)
      } else {
        await flattenChildRec(sync, prevLevelKey, idx, result)
      }
    } else if (child instanceof Array) {
      await flattenChildrenRec(child, prevLevelKey + encodeIndex(idx), result)
    } else {
      result.push({
        ...child,
        // if the block has explicitly defined key then don't auto-generate and
        // append it to previous level key separated by space (space is not included in encodeIndex dictionary)
        key: prevLevelKey + (child.key ? ' ' + child.key : encodeIndex(idx)),
      })
    }
  }
}

function isPromise<ExtraActions>(b: ChatiumChildNode<ExtraActions>): b is Promise<SyncNode<ExtraActions>> {
  return types.isPromise(b)
}

export type ChatiumChildNode<ExtraActions> = SyncNode<ExtraActions> | Promise<SyncNode<ExtraActions>>
type SyncNode<ExtraActions> = SingleNode<ExtraActions> | SingleNode<ExtraActions>[]
type SingleNode<ExtraActions> = ChatiumBlock<ExtraActions> | null | undefined | false | 0 | ''

/**
 * Compact auto-generated key encoding.
 * 0-91 are encoded using single character
 * 92-8463 are encoded using ' + two characters
 * 8464-778687 are encoded using ` + three characters
 * Highrer numbers are not supported and return empty string
 * @param idx - must be natural int
 */
function encodeIndex(idx: number): string {
  if (idx < singleCapacity) {
    return keyDictionary[idx]
  } else if (idx < doubleCapacity) {
    const leftDigit = Math.floor(idx / singleCapacity)
    return doubleMarker + keyDictionary[leftDigit] + keyDictionary[idx - singleCapacity * leftDigit]
  } else if (idx < tripleCapacity) {
    const leftDigit = Math.floor(idx / doubleCapacity)
    const middleRemainder = idx - doubleCapacity * leftDigit
    const middleDigit = Math.floor(middleRemainder / singleCapacity)
    return (
      tripleMarker +
      keyDictionary[leftDigit] +
      keyDictionary[middleDigit] +
      keyDictionary[middleRemainder - singleCapacity * middleDigit]
    )
  } else {
    return ''
  }
}

const keyDictionary = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?@#$%&^*+-.,;:=~_\\|/()[]{}<>"'
const singleCapacity = keyDictionary.length
const doubleCapacity = singleCapacity * singleCapacity
const tripleCapacity = doubleCapacity * singleCapacity
const doubleMarker = "'"
const tripleMarker = '`'
