import { ChatiumAction, ChatiumActions } from '../actions'
import { CommonBlockProps, OverlayProps } from '../commonTypes'

interface CommonVideoProps extends CommonBlockProps {
  hlsUrl?: string // for desktop only
  imageUrl?: string
  mp4Url?: string // for desktop only
  videoAspectRatio?: [number, number] // for desktop only
}

export interface VideoBlock extends CommonVideoProps {
  type: 'video'
  url?: string
  // for desktop only
  file?: {
    hash: string
  }
  // deprecated props, supported by clients by shouldn't be used, left here for reference
  // videoHash?: string
  // imageSize?: {
  //   width: number
  //   height: number
  // }
}

export type VideoProps = Omit<VideoBlock, 'type'>

export function Video(props: VideoProps): VideoBlock {
  return {
    type: 'video',
    ...props,
  }
}

export interface InlineVideoBlock extends CommonVideoProps {
  type: 'inlineVideo'
  id?: string // should be key
  ignoreSilentSwitch?: 'ignore' | 'obey'
  muted?: boolean
  onProgressChange?: ProgressChangeProps[]
  overlay?: OverlayProps
  onVideoEnd?: ChatiumActions
  paused?: boolean
  playInBackground?: boolean
  playWhenInactive?: boolean
  repeat?: boolean
  resizeMode?: 'contain' | 'cover' | 'stretch'
  showControls?: 'full' | 'compact'
  showTimer?: boolean
  url: string
  videoSize?: VideoSize
}

export interface ProgressChangeProps {
  cond: string
  action: ChatiumAction
}

export interface VideoSize {
  width: number
  height: number
}

export type InlineVideoProps = Omit<InlineVideoBlock, 'type'>

export function InlineVideo(props: InlineVideoProps): InlineVideoBlock {
  if (props.videoSize && props.videoSize && props.videoSize.height > props.videoSize.width) {
    props.resizeMode = 'cover'
  }

  return {
    type: 'inlineVideo',
    ignoreSilentSwitch: 'ignore',
    ...props,
  }
}
