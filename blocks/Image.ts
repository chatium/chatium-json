import { ChatiumActions } from '../actions'
import { CommonBlockProps } from './commonTypes'

export interface ImageBlock extends CommonBlockProps {
  type: 'image'
  downloadUrl: string
  onClick?: ChatiumActions
  width?: number
  height?: number
  image?: any
  resizeMode?: string
  imageSize?: {
    width: number
    height: number
  }
}

export type ImageProps = Omit<ImageBlock, 'type'>

export function Image(props: ImageProps): ImageBlock {
  return {
    type: 'image',
    ...props,
  }
}
