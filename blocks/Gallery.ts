import { ChatiumActions } from '../actions'
import { CommonBlockProps, ContainerStyle } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { OverlayProps } from '../utils/Overlay'
import { ChatiumBlock } from './index'

export type GalleryBlock = GalleryProps & {
  type: 'gallery'
}

export type GalleryProps = {
  id: string
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
  id?: string
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

export async function SimpleGallery(props: GalleryProps, children: ChatiumChildNode[]): Promise<GalleryBlock> {
  const slides: GallerySlide[] = []

  for (const child of children) {
    slides.push({
      blocks: await flattenChildren([child]),
    })
  }

  return {
    type: 'gallery',
    ...props,
    slides: slides,
  }
}

export async function SlidesGallery(props: GalleryProps, slides: GallerySlide[]): Promise<GalleryBlock> {
  return {
    type: 'gallery',
    ...props,
    slides: slides,
  }
}
