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

export interface ChatiumScreen<ExtraBlocks, ExtraActions> {
  title: string
  description?: string
  backUrl?: string
  header?: HeaderProps<ExtraBlocks, ExtraActions>
  headerButton?: HeaderButton<ExtraBlocks, ExtraActions>
  headerLeftButton?: HeaderButton<ExtraBlocks, ExtraActions>
  contextLinks?: ContextLink<ExtraActions>[]
  socketId?: string
  socketIds?: string[]
  blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[]
  dropdownMenuBlocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[]
  dropdownMenuInitiallyVisible?: boolean
  pinnedBlocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[]
  chat?: ChatProps<ExtraActions>
  fullScreenGallery?: GalleryProps<ExtraBlocks, ExtraActions>
  footer?: FooterProps<ExtraBlocks, ExtraActions>
  search?: SearchProps<ExtraBlocks, ExtraActions>
  needEmailCheck?: boolean
  needPhoneCheck?: boolean
  scrollTo?: string
  logo?: Icon
  layout?: 'stack' | 'fixed'
  bgColor?: string
}

export type HeaderButton<ExtraBlocks, ExtraActions> = Pick<ButtonProps<ExtraBlocks, ExtraActions>, 'icon' | 'onClick'>

export interface ContextLink<ExtraActions> {
  title: string
  icon?: Icon
  action: ChatiumActions<ExtraActions>
}

export type ScreenProps<ExtraBlocks, ExtraActions> = Omit<
  ChatiumScreen<ExtraBlocks, ExtraActions>,
  'blocks' | 'search' | 'headerButton' | 'pinnedBlocks' | 'backUrl'
> & {
  headerButton?: HeaderButton<ExtraBlocks, ExtraActions> | Promise<HeaderButton<ExtraBlocks, ExtraActions>>
  pinnedBlocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[] | Promise<ChatiumBlock<ExtraBlocks, ExtraActions>[]>
  backUrl?: string | Promise<string>
}

/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
export async function Screen<ExtraBlocks, ExtraActions>(
  props: ScreenProps<ExtraBlocks, ExtraActions>,
  ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]
): Promise<ChatiumScreen<ExtraBlocks, ExtraActions>> {
  const flatBlocks = await flattenChildren(children)

  // extract search and footer blocks
  let header: HeaderBlock<ExtraBlocks, ExtraActions> | undefined
  let search: SearchBlock<ExtraBlocks, ExtraActions> | undefined
  let footer: FooterBlock<ExtraBlocks, ExtraActions> | undefined
  const blocks: ChatiumBlock<ExtraBlocks, ExtraActions>[] = []
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

const isSearchBlock = <ExtraBlocks, ExtraActions>(
  b: ChatiumBlock<ExtraBlocks, ExtraActions>,
): b is SearchBlock<ExtraBlocks, ExtraActions> => (b as any).type === 'search'

const isHeaderBlock = <ExtraBlocks, ExtraActions>(
  b: ChatiumBlock<ExtraBlocks, ExtraActions>,
): b is HeaderBlock<ExtraBlocks, ExtraActions> => (b as any).type === 'header'

const isFooterBlock = <ExtraBlocks, ExtraActions>(
  b: ChatiumBlock<ExtraBlocks, ExtraActions>,
): b is FooterBlock<ExtraBlocks, ExtraActions> => (b as any).type === 'footer'
