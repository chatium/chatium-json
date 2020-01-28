import { ChatiumBlock } from './blocks'
import { SearchBlock, SearchProps } from './blocks/Search'
import { ChatiumChildNode, flattenChildren } from './utils/children'

export interface ChatiumScreen {
  title: string
  description?: string
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
  const flatBlocks = await flattenChildren(children)

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

function isSearchBlock(b: ChatiumBlock): b is SearchBlock {
  return b.type === 'search'
}
