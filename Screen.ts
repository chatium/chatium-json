import type { ChatiumBlock } from './blocks'
import type { ButtonProps } from './blocks/Button'
import type { FooterBlock, FooterProps } from './blocks/Footer'
import type { GalleryProps } from './blocks/Gallery'
import type { HeaderBlock, HeaderProps } from './blocks/Header'
import type { SearchBlock, SearchProps } from './blocks/Search'
import type { ChatProps } from './Chat'
import type { Icon } from './commonTypes'
import type { ContextLink } from './ContextLink'
import { ChatiumChildNode, flattenChildren } from './utils/children'

export interface ChatiumScreen {
  title: string
  description?: string
  backUrl?: string
  header?: HeaderProps
  headerButton?: HeaderButton
  headerLeftButton?: HeaderButton
  contextLinks?: ContextLink[]
  socketId?: string
  socketIds?: string[]
  blocks?: ChatiumBlock[]
  dropdownMenuBlocks?: ChatiumBlock[]
  dropdownMenuInitiallyVisible?: boolean
  pinnedBlocks?: ChatiumBlock[]
  chat?: ChatProps
  fullScreenGallery?: GalleryProps
  footer?: FooterProps
  search?: SearchProps
  needEmailCheck?: boolean
  needPhoneCheck?: boolean
  scrollTo?: string
  logo?: Icon
  layout?: 'stack' | 'fixed'
  bgColor?: string
}

export type HeaderButton = Pick<ButtonProps, 'icon' | 'onClick'>

export type ScreenProps = Omit<ChatiumScreen, 'blocks' | 'search' | 'headerButton' | 'pinnedBlocks' | 'backUrl'> & {
  headerButton?: HeaderButton | Promise<HeaderButton>
  pinnedBlocks?: ChatiumBlock[] | Promise<ChatiumBlock[]>
  backUrl?: string | Promise<string>
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
  const blocks: ChatiumBlock[] = []
  for (const b of flatBlocks) {
    if (isHeaderBlock(b)) {
      header = b
    } else if (isSearchBlock(b)) {
      search = b
    } else if (isFooterBlock(b)) {
      footer = b
    } else {
      blocks.push(b)
    }
  }

  return {
    ...props,
    backUrl: await props.backUrl,
    headerButton: await props.headerButton,
    pinnedBlocks: await props.pinnedBlocks,
    blocks,
    footer,
    header: header || props.header,
    search,
  }
}

const isSearchBlock = (b: ChatiumBlock): b is SearchBlock => b.type === 'search'
const isHeaderBlock = (b: ChatiumBlock): b is HeaderBlock => b.type === 'header'
const isFooterBlock = (b: ChatiumBlock): b is FooterBlock => b.type === 'footer'
