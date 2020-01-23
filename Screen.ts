import { types } from 'util'

import { SearchBlock, SearchProps } from './blocks/Search'
import { ChatiumBlock } from './blocks'

export interface ChatiumScreen {
  title: string
  blocks: ChatiumBlock[]
  search?: SearchProps
}

export type ScreenProps = Omit<ChatiumScreen, 'blocks' | 'search'>

/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
export async function Screen(props: ScreenProps, ...children: ChatiumChildNode[]): Promise<ChatiumScreen> {
  const flatBlocks: ChatiumBlock[] = []
  await flattenChildrenRec(children, flatBlocks)

  // extract search block
  let search: SearchBlock | undefined
  const blocks: ChatiumBlock[] = []
  for (const b of flatBlocks) {
    if (isSearchBlock(b)) {
      search = b
    } else {
      blocks.push(b)
    }
  }

  return {
    ...props,
    blocks,
    search,
  }
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

function isSearchBlock(b: ChatiumBlock): b is SearchBlock {
  return b.type === 'search'
}

export type ChatiumChildNode = SyncNode | Promise<SyncNode>
type SyncNode = SingleNode | SingleNode[]
type SingleNode = ChatiumBlock | null | undefined | false | 0 | ''
