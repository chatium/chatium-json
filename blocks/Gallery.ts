import type { ChatiumActions } from '../actions'
import type { CommonBlockProps } from '../commonTypes'
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
