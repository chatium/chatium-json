import { ChatiumBlock } from './blocks'
import { ButtonProps } from './blocks/Button'
import { FooterBlock, FooterProps } from './blocks/Footer'
import { SearchBlock, SearchProps } from './blocks/Search'
import { ChatiumChildNode, flattenChildren } from './utils/children'
import { Icon } from './blocks/commonTypes'

interface ChatProps {
  messages_get_url: string
  messages_add_url: string
  messages_edit_url: string
  messages_delete_url: string
  mark_as_read_url: string
  last_read_get_url: string
  support_paging: boolean
  files_put_url: string
  reply_quotes_enabled: boolean
  current_author: ChatUser
  group_author: ChatUser | null
  messages_socket_id: string
  last_read_at: number | null
  last_read_socket_id: string
  typing_socket_data: {
    id: string
    name: string
    uid: string
  }
}

interface ChatUser {
  id: string
  url: string
  name: string
  avatar: Icon
}

export interface ChatiumScreen {
  title: string
  description?: string
  headerButton?: Pick<ButtonProps, 'icon' | 'onClick'>
  blocks?: ChatiumBlock[]
  chat?: ChatProps
  footer?: FooterProps
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

  // extract search and footer blocks
  let search: SearchBlock | undefined
  let footer: FooterBlock | undefined
  const blocks: ChatiumBlock[] = []
  for (const b of flatBlocks) {
    if (isSearchBlock(b)) {
      search = b
    } else if (isFooterBlock(b)) {
      footer = b
    } else {
      blocks.push(b)
    }
  }

  return {
    ...props,
    blocks,
    footer,
    search,
  }
}

function isSearchBlock(b: ChatiumBlock): b is SearchBlock {
  return b.type === 'search'
}
function isFooterBlock(b: ChatiumBlock): b is FooterBlock {
  return b.type === 'footer'
}
