import { ChatiumActions } from '../actions'
import { CommonBlockProps, OverlayProps } from '../commonTypes'

interface CommonVideoProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
  hlsUrl?: string // for desktop only
  imageUrl?: string
  mp4Url?: string // for desktop only
  videoAspectRatio?: [number, number] // for desktop only
}

export interface VideoProps<ExtraBlocks, ExtraActions> extends CommonVideoProps<ExtraBlocks, ExtraActions> {
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

export interface VideoBlock<ExtraBlocks, ExtraActions> extends VideoProps<ExtraBlocks, ExtraActions> {
  type: 'video'
}

export function Video<ExtraBlocks, ExtraActions>(
  props: VideoProps<ExtraBlocks, ExtraActions>,
): VideoBlock<ExtraBlocks, ExtraActions> {
  return {
    type: 'video',
    ...props,
  }
}

export interface InlineVideoProps<ExtraBlocks, ExtraActions> extends CommonVideoProps<ExtraBlocks, ExtraActions> {
  ignoreSilentSwitch?: 'ignore' | 'obey'
  muted?: boolean
  onProgressChange?: ProgressChangeProps<ExtraActions>[]
  overlay?: OverlayProps<ExtraBlocks, ExtraActions>
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

export interface InlineVideoBlock<ExtraBlocks, ExtraActions> extends InlineVideoProps<ExtraBlocks, ExtraActions> {
  type: 'inlineVideo'
}

export function InlineVideo<ExtraBlocks, ExtraActions>(
  props: InlineVideoProps<ExtraBlocks, ExtraActions>,
): InlineVideoBlock<ExtraBlocks, ExtraActions> {
  if (props.videoSize && props.videoSize && props.videoSize.height > props.videoSize.width) {
    props.resizeMode = 'cover'
  }

  return {
    type: 'inlineVideo',
    ignoreSilentSwitch: 'ignore',
    ...props,
  }
}
