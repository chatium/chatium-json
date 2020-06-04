import { CommonBlockProps } from './commonTypes'

export interface ImageBlock extends CommonBlockProps {
  type: 'image'
  //насколько я понимаю url может быть вообще не связан с чатиумом?
  //думаю можно ли этим воспользоваться чтобы какие-то кастомные вещи сделать
  downloadUrl: string
  width?: number
  height?: number
  //а для чего вот этот параметр, в чем разница с downloadUrl? кроме очевидного момента,
  //что в первом полный url
  image?: any
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
