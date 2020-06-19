import { SlotBlock, SlotsProps } from 'lib/chatium-json/blocks/Slot'
import { MessageJson } from 'modules/feed/types/messageType'

import { ChatiumBlock } from './blocks'
import { ButtonProps } from './blocks/Button'
import { Author, Icon } from './blocks/commonTypes'
import { FooterBlock, FooterProps } from './blocks/Footer'
import { HeaderBlock, HeaderProps } from './blocks/Header'
import { SearchBlock, SearchProps } from './blocks/Search'
import { ContextLink } from './ContextLink'
import { ChatiumChildNode, flattenChildren } from './utils/children'

export interface ChatProps {
  messages_get_url: string
  messages_add_url?: string
  messages_edit_url: string
  messages_delete_url: string
  messages_changes_url: string
  messages_react_url: string
  mark_as_read_url?: string
  last_read_get_url?: string
  last_message_id: string | null
  last_read_message_id: string | null
  support_paging: boolean
  files_put_url: string
  reply_quotes_enabled: boolean
  current_author: Author | null
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
  on_context_api_call_url?: string
}

export interface ChatiumScreen {
  title: string
  description?: string
  backUrl?: string
  header?: HeaderProps
  headerButton?: HeaderButton
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
  layout?: 'stack' | 'fixed'
}

type HeaderButton = Pick<ButtonProps, 'icon' | 'onClick'>

export type ScreenProps = Omit<ChatiumScreen, 'blocks' | 'search' | 'headerButton' | 'pinnedBlocks'> & {
  headerButton?: HeaderButton | Promise<HeaderButton>
  pinnedBlocks?: ChatiumBlock[] | Promise<ChatiumBlock[]>
}

/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
export async function Screen(props: ScreenProps, ...children: ChatiumChildNode[]): Promise<ChatiumScreen> {
  const flatBlocks = await flattenChildren(children)

  // extract search and footer blocks
  let header: HeaderBlock | undefined
  let search: SearchBlock | undefined
  let footer: FooterBlock | undefined
  const slots: Record<string, SlotBlock> = {}
  const blocks: ChatiumBlock[] = []
  for (const b of flatBlocks) {
    if (isHeaderBlock(b)) {
      header = b
    } else if (isSearchBlock(b)) {
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
    headerButton: await props.headerButton,
    pinnedBlocks: await props.pinnedBlocks,
    blocks,
    footer,
    header,
    search,
    slots,
  }
}

const isSearchBlock = (b: ChatiumBlock): b is SearchBlock => b.type === 'search'
const isHeaderBlock = (b: ChatiumBlock): b is HeaderBlock => b.type === 'header'
const isFooterBlock = (b: ChatiumBlock): b is FooterBlock => b.type === 'footer'
const isSlotBlock = (b: ChatiumBlock): b is SlotBlock => b.type === 'slot'
