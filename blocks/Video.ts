import { CommonBlockProps } from './commonTypes'

export interface VideoBlock extends CommonBlockProps {
  type: 'video'
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
