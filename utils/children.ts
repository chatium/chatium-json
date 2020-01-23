import { types } from 'util'
import { ChatiumBlock } from '../blocks'

export async function flattenChildren(children: ChatiumChildNode[]): Promise<ChatiumBlock[]> {
  const result: ChatiumBlock[] = []
  await flattenChildrenRec(children, result)
  return result
}

async function flattenChildrenRec(children: ChatiumChildNode[], result: ChatiumBlock[]): Promise<void> {
  for (const b of children) {
    await flattenChildRec(b, result)
  }
}

async function flattenChildRec(child: ChatiumChildNode, result: ChatiumBlock[]): Promise<void> {
  // skip falsy nodes
  if (child) {
    if (isPromise(child)) {
      const sync = await child
      if (sync instanceof Array) {
        await flattenChildrenRec(sync, result)
      } else {
        await flattenChildRec(sync, result)
      }
    } else if (child instanceof Array) {
      await flattenChildrenRec(child, result)
    } else {
      result.push(child)
    }
  }
}

function isPromise(b: ChatiumChildNode): b is Promise<SyncNode> {
  return types.isPromise(b)
}

export type ChatiumChildNode = SyncNode | Promise<SyncNode>
type SyncNode = SingleNode | SingleNode[]
type SingleNode = ChatiumBlock | null | undefined | false | 0 | ''
