import { ChatiumActions } from '../actions';
import { CommonBlockProps, OverlayProps } from '../commonTypes';
interface CommonVideoProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
    hlsUrl?: string;
    imageUrl?: string;
    mp4Url?: string;
    videoAspectRatio?: [number, number];
}
export interface VideoProps<ExtraActions> extends CommonVideoProps<ExtraActions> {
    url?: string;
    file?: {
        hash: string;
    };
}
export interface VideoBlock<ExtraActions> extends VideoProps<ExtraActions> {
    type: 'video';
}
export declare function Video<ExtraActions>(props: VideoProps<ExtraActions>): VideoBlock<ExtraActions>;
export interface InlineVideoProps<ExtraActions> extends CommonVideoProps<ExtraActions> {
    ignoreSilentSwitch?: 'ignore' | 'obey';
    muted?: boolean;
    onProgressChange?: ProgressChangeProps<ExtraActions>[];
    overlay?: OverlayProps<ExtraActions>;
    onVideoEnd?: ChatiumActions<ExtraActions>;
    paused?: boolean;
    playInBackground?: boolean;
    playWhenInactive?: boolean;
    repeat?: boolean;
    resizeMode?: 'contain' | 'cover' | 'stretch';
    showControls?: 'full' | 'compact';
    showTimer?: boolean;
    url: string;
    videoSize?: VideoSize;
}
export interface ProgressChangeProps<ExtraActions> {
    cond: string;
    action: ChatiumActions<ExtraActions>;
}
export interface VideoSize {
    width: number;
    height: number;
}
export interface InlineVideoBlock<ExtraActions> extends InlineVideoProps<ExtraActions> {
    type: 'inlineVideo';
}
export declare function InlineVideo<ExtraActions>(props: InlineVideoProps<ExtraActions>): InlineVideoBlock<ExtraActions>;
export {};
