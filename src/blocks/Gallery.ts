import type { ChatiumActions } from '../actions'
import type { CommonBlockProps } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import type { ChatiumBlock } from './index'

export type GalleryBlock<ExtraBlocks, ExtraActions> = GalleryProps<ExtraBlocks, ExtraActions> & {
  type: 'gallery'
}

export type GalleryProps<ExtraBlocks, ExtraActions> = {
  onClick?: ChatiumActions<ExtraActions>
  initialSlideIndex?: number
  slides?: Array<
    { content?: ChatiumBlock<ExtraBlocks, ExtraActions> } | { blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[] }
  >
} & CommonBlockProps<ExtraBlocks, ExtraActions>

export async function Gallery<ExtraBlocks, ExtraActions>(
  props: GalleryProps<ExtraBlocks, ExtraActions>,
  ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]
): Promise<GalleryBlock<ExtraBlocks, ExtraActions>> {
  const slides: { blocks: ChatiumBlock<ExtraBlocks, ExtraActions>[] }[] = []

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
