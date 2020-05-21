import { ChatiumActions } from '../actions'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { CommonBlockProps } from './commonTypes'
import { ChatiumBlock } from './index'

export type GalleryBlock = GalleryProps & {
  type: 'gallery'
  slides?: ChatiumBlock[]
}

export type GalleryProps = {
  onClick?: ChatiumActions
} & CommonBlockProps

export async function Gallery(props: GalleryProps, ...children: ChatiumChildNode[]): Promise<GalleryBlock> {
  return {
    type: 'gallery',
    ...props,
    slides: await flattenChildren(children),
  }
}
