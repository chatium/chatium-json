import { ChatiumActions } from '../actions'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { CommonBlockProps } from './commonTypes'
import { ChatiumBlock } from './index'

export type GalleryBlock = GalleryProps & {
  type: 'gallery'
  slides: Array<{ blocks: ChatiumBlock[] }>
}

export type GalleryProps = {
  onClick?: ChatiumActions
} & CommonBlockProps

export async function Gallery(props: GalleryProps, ...children: ChatiumChildNode[]): Promise<GalleryBlock> {
  const slides: { blocks: ChatiumBlock[] }[] = []

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

export interface Slide {
  blocks: ChatiumBlock[]
}

export async function SimpleGallery(props: GalleryProps, children: ChatiumChildNode[]): Promise<GalleryBlock> {
  const slides: Slide[] = []

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

export async function SlidesGallery(props: GalleryProps, slides: Slide[]): Promise<GalleryBlock> {
  return {
    type: 'gallery',
    ...props,
    slides: slides,
  }
}
