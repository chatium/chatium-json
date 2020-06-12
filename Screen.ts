import { SlotBlock, SlotsProps } from 'lib/chatium-json/blocks/Slot'
import { MessageJson } from 'modules/feed/types/messageType'

import { ChatiumAction } from './actions'
import { ChatiumBlock } from './blocks'
import { ButtonProps } from './blocks/Button'
import { Author, Icon } from './blocks/commonTypes'
import { FooterBlock, FooterProps } from './blocks/Footer'
import { SearchBlock, SearchProps } from './blocks/Search'
import { TextBlock } from './blocks/Text'
import { ContextLink } from './ContextLink'
import { ChatiumChildNode, flattenChildren } from './utils/children'

export interface ChatProps {
  messages_get_url: string
  messages_add_url?: string
  messages_edit_url: string
  messages_delete_url: string
  messages_changes_url: string
  messages_react_url: string
  mark_as_read_url: string
  last_read_get_url: string
  last_message_id: string | null
  last_read_message_id: string | null
  support_paging: boolean
  files_put_url: string
  reply_quotes_enabled: boolean
  current_author: Author
  group_author: Author | null
  messages_socket_id: string
  reactions_socket_id: string
  last_read_at: number | null
  last_read_socket_id: string
  typing_socket_data?: {
    id: string
    name: string
    uid: string
  }
  pinned?: {
    message?: MessageJson
    update_url?: string
  }
  render_inverted?: boolean
  on_context_api_call_url: string
}

export interface ChatiumScreenHeader {
  compact: boolean
  logo?: { icon: Icon; onClick?: ChatiumAction; onContext?: ChatiumAction }
  title?: TextBlock
  description?: TextBlock
  bottomGradientColors?: string[]
  topGradientColors?: string[]
  image?: {
    downloadUrl: string
    imageSize: { width: number; height: number }
  }
}

export interface ChatiumScreen {
  title: string
  description?: string
  backUrl?: string
  header?: ChatiumScreenHeader
  headerButton?: Pick<ButtonProps, 'icon' | 'onClick'>
  contextLinks?: ContextLink[]
  socketId?: string
  blocks?: ChatiumBlock[]
  dropdownMenuBlocks?: ChatiumBlock[]
  dropdownMenuInitiallyVisible?: boolean
  pinnedBlocks?: ChatiumBlock[]
  chat?: ChatProps
  footer?: FooterProps
  search?: SearchProps
  slots?: SlotsProps
  needPhoneCheck?: boolean
  scrollTo?: string
  logo?: Icon
  appearance?: 'normal' | 'mobile'
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
  const slots: Record<string, SlotBlock> = {}
  const blocks: ChatiumBlock[] = []
  for (const b of flatBlocks) {
    if (isSearchBlock(b)) {
      search = b
    } else if (isFooterBlock(b)) {
      footer = b
    } else if (isSlotBlock(b)) {
      slots[b.target] = b
    } else {
      blocks.push(b)
    }
  }

  return {
    ...props,
    blocks,
    footer,
    search,
    slots,
  }
}

const isSearchBlock = (b: ChatiumBlock): b is SearchBlock => b.type === 'search'
const isFooterBlock = (b: ChatiumBlock): b is FooterBlock => b.type === 'footer'
const isSlotBlock = (b: ChatiumBlock): b is SlotBlock => b.type === 'slot'
