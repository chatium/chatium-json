import type { ChatiumActions } from '../actions'
import type { ChatiumJsonId, CommonBlockProps, ContainerStyle, OverlayProps } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import type { ChatiumBlock } from './index'

export type GalleryBlock = GalleryProps & {
  type: 'gallery'
}

export type GalleryProps = {
  onClick?: ChatiumActions
  initialSlideIndex?: number
  slides?: Array<{ content?: ChatiumBlock } | { blocks?: ChatiumBlock[] }>
} & CommonBlockProps

export async function Gallery(props: GalleryProps, ...children: ChatiumChildNode[]): Promise<GalleryBlock> {
  const slides: { blocks: ChatiumBlock[] }[] = []

  for (const child of await flattenChildren(children)) {
    slides.push({
      blocks: [child],
    })
  }

  return {
    type: 'gallery',
    ...props,
    slides,
  }
}

export interface GallerySlide {
  id?: ChatiumJsonId // for updateCurrentScreenBlock action support
  entityId?: string
  blocks?: ChatiumBlock[]
  content?: ChatiumBlock
  overlay?: OverlayProps
  containerStyle?: ContainerStyle
  stretchContent?: boolean
  onBecomeVisible?: ChatiumActions
  onVideoEnd?: ChatiumActions
  onContext?: ChatiumActions
}

export async function SlidesGallery(props: GalleryProps, slides: GallerySlide[]): Promise<GalleryBlock> {
  return {
    type: 'gallery',
    ...props,
    slides,
  }
}
