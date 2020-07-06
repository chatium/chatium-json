import { CommonBlockProps } from './commonTypes'

export interface VideoBlock extends CommonBlockProps {
  type: 'video' | 'inlineVideo'
  file?: object
  videoSize?: object
  videoAspectRatio?: object
  url?: string
  imageUrl?: string
}

export type VideoProps = Omit<VideoBlock, 'type'>

export function Video(props: VideoProps): VideoBlock {
  return {
    type: 'video',
    ...props,
  }
}

export function InlineVideo(props: VideoProps): VideoBlock {
  return {
    type: 'inlineVideo',
    ...props,
  }
}
