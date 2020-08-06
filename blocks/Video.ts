import { VideoSize } from 'core/utils/fileService'

import { ChatiumAction, ChatiumActions } from '../actions'
import { CommonBlockProps } from './commonTypes'

export interface ProgressChangeProps {
  cond: string
  action: ChatiumAction
}

export interface VideoBlock extends CommonBlockProps {
  type: 'video' | 'inlineVideo'
  file?: object
  videoSize?: VideoSize
  videoAspectRatio?: object
  ignoreSilentSwitch?: string
  playInBackground?: boolean
  playWhenInactive?: boolean
  repeat?: boolean
  muted?: boolean
  paused?: boolean
  url?: string
  mp4Url?: string
  hlsUrl?: string
  imageUrl?: string
  resizeMode?: string
  onVideoEnd?: ChatiumActions
  onProgressChange?: ProgressChangeProps[]
}

export type VideoProps = Omit<VideoBlock, 'type'>

export function Video(props: VideoProps): VideoBlock {
  return {
    type: 'video',
    ...props,
  }
}

export function InlineVideo(props: VideoProps): VideoBlock {
  if (props.videoSize && props.videoSize && props.videoSize.height > props.videoSize.width) {
    props.resizeMode = 'cover'
  }

  return {
    type: 'inlineVideo',
    ignoreSilentSwitch: 'ignore',
    ...props,
  }
}
