import type { ChatiumActions } from '../actions'
import type { CommonBlockProps } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import type { ChatiumBlock } from './index'

export type GalleryBlock<ExtraActions> = GalleryProps<ExtraActions> & {
  type: 'gallery'
}

export type GalleryProps<ExtraActions> = {
  onClick?: ChatiumActions<ExtraActions>
  initialSlideIndex?: number
  slides?: Array<{ content?: ChatiumBlock<ExtraActions> } | { blocks?: ChatiumBlock<ExtraActions>[] }>
} & CommonBlockProps<ExtraActions>

export async function Gallery<ExtraActions>(
  props: GalleryProps<ExtraActions>,
  ...children: ChatiumChildNode<ExtraActions>[]
): Promise<GalleryBlock<ExtraActions>> {
  const slides: { blocks: ChatiumBlock<ExtraActions>[] }[] = []

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
