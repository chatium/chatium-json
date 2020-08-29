import { ChatiumActions } from '../actions'
import { CommonBlockProps, OverlayProps } from '../commonTypes'

interface CommonVideoProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
  hlsUrl?: string // for desktop only
  imageUrl?: string
  mp4Url?: string // for desktop only
  videoAspectRatio?: [number, number] // for desktop only
}

export interface VideoProps<ExtraActions> extends CommonVideoProps<ExtraActions> {
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

export interface VideoBlock<ExtraActions> extends VideoProps<ExtraActions> {
  type: 'video'
}

export function Video<ExtraActions>(props: VideoProps<ExtraActions>): VideoBlock<ExtraActions> {
  return {
    type: 'video',
    ...props,
  }
}

export interface InlineVideoProps<ExtraActions> extends CommonVideoProps<ExtraActions> {
  ignoreSilentSwitch?: 'ignore' | 'obey'
  muted?: boolean
  onProgressChange?: ProgressChangeProps<ExtraActions>[]
  overlay?: OverlayProps<ExtraActions>
  onVideoEnd?: ChatiumActions<ExtraActions>
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

export interface ProgressChangeProps<ExtraActions> {
  cond: string
  action: ChatiumActions<ExtraActions>
}

export interface VideoSize {
  width: number
  height: number
}

export interface InlineVideoBlock<ExtraActions> extends InlineVideoProps<ExtraActions> {
  type: 'inlineVideo'
}

export function InlineVideo<ExtraActions>(props: InlineVideoProps<ExtraActions>): InlineVideoBlock<ExtraActions> {
  if (props.videoSize && props.videoSize && props.videoSize.height > props.videoSize.width) {
    props.resizeMode = 'cover'
  }

  return {
    type: 'inlineVideo',
    ignoreSilentSwitch: 'ignore',
    ...props,
  }
}
