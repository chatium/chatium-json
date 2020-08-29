import type { ChatiumActions } from './actions'
import type { ChatiumBlock } from './blocks'
import type { ButtonProps } from './blocks/Button'
import type { FooterBlock, FooterProps } from './blocks/Footer'
import type { GalleryProps } from './blocks/Gallery'
import type { HeaderBlock, HeaderProps } from './blocks/Header'
import type { SearchBlock, SearchProps } from './blocks/Search'
import type { ChatProps } from './Chat'
import type { Icon } from './commonTypes'
import { ChatiumChildNode, flattenChildren } from './utils/children'

export interface ChatiumScreen<ExtraActions> {
  title: string
  description?: string
  backUrl?: string
  header?: HeaderProps<ExtraActions>
  headerButton?: HeaderButton<ExtraActions>
  headerLeftButton?: HeaderButton<ExtraActions>
  contextLinks?: ContextLink<ExtraActions>[]
  socketId?: string
  socketIds?: string[]
  blocks?: ChatiumBlock<ExtraActions>[]
  dropdownMenuBlocks?: ChatiumBlock<ExtraActions>[]
  dropdownMenuInitiallyVisible?: boolean
  pinnedBlocks?: ChatiumBlock<ExtraActions>[]
  chat?: ChatProps<ExtraActions>
  fullScreenGallery?: GalleryProps<ExtraActions>
  footer?: FooterProps<ExtraActions>
  search?: SearchProps<ExtraActions>
  needEmailCheck?: boolean
  needPhoneCheck?: boolean
  scrollTo?: string
  logo?: Icon
  layout?: 'stack' | 'fixed'
  bgColor?: string
}

export type HeaderButton<ExtraActions> = Pick<ButtonProps<ExtraActions>, 'icon' | 'onClick'>

export interface ContextLink<ExtraActions> {
  title: string
  icon?: Icon
  action: ChatiumActions<ExtraActions>
}

export type ScreenProps<ExtraActions> = Omit<
  ChatiumScreen<ExtraActions>,
  'blocks' | 'search' | 'headerButton' | 'pinnedBlocks' | 'backUrl'
> & {
  headerButton?: HeaderButton<ExtraActions> | Promise<HeaderButton<ExtraActions>>
  pinnedBlocks?: ChatiumBlock<ExtraActions>[] | Promise<ChatiumBlock<ExtraActions>[]>
  backUrl?: string | Promise<string>
}

/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
export async function Screen<ExtraActions>(
  props: ScreenProps<ExtraActions>,
  ...children: ChatiumChildNode<ExtraActions>[]
): Promise<ChatiumScreen<ExtraActions>> {
  const flatBlocks = await flattenChildren(children)

  // extract search and footer blocks
  let header: HeaderBlock<ExtraActions> | undefined
  let search: SearchBlock<ExtraActions> | undefined
  let footer: FooterBlock<ExtraActions> | undefined
  const blocks: ChatiumBlock<ExtraActions>[] = []
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

const isSearchBlock = <ExtraActions>(b: ChatiumBlock<ExtraActions>): b is SearchBlock<ExtraActions> =>
  b.type === 'search'
const isHeaderBlock = <ExtraActions>(b: ChatiumBlock<ExtraActions>): b is HeaderBlock<ExtraActions> =>
  b.type === 'header'
const isFooterBlock = <ExtraActions>(b: ChatiumBlock<ExtraActions>): b is FooterBlock<ExtraActions> =>
  b.type === 'footer'
