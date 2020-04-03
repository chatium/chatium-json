import { CommonBlockProps } from './commonTypes'

export interface ImageBlock extends CommonBlockProps {
  type: 'image'
  downloadUrl: string
  width?: number
  image?: any
}

export type ImageProps = Omit<ImageBlock, 'type'>

export function Image(props: ImageProps): ImageBlock {
  return {
    type: 'image',
    ...props,
  }
}
