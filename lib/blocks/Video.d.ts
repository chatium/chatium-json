import { ChatiumActions } from '../actions';
import { CommonBlockProps, OverlayProps } from '../commonTypes';
interface CommonVideoProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
    hlsUrl?: string;
    imageUrl?: string;
    mp4Url?: string;
    videoAspectRatio?: [number, number];
}
export interface VideoProps<ExtraBlocks, ExtraActions> extends CommonVideoProps<ExtraBlocks, ExtraActions> {
    url?: string;
    file?: {
        hash: string;
    };
}
export interface VideoBlock<ExtraBlocks, ExtraActions> extends VideoProps<ExtraBlocks, ExtraActions> {
    type: 'video';
}
export declare function Video<ExtraBlocks, ExtraActions>(props: VideoProps<ExtraBlocks, ExtraActions>): VideoBlock<ExtraBlocks, ExtraActions>;
export interface InlineVideoProps<ExtraBlocks, ExtraActions> extends CommonVideoProps<ExtraBlocks, ExtraActions> {
    ignoreSilentSwitch?: 'ignore' | 'obey';
    muted?: boolean;
    onProgressChange?: ProgressChangeProps<ExtraActions>[];
    overlay?: OverlayProps<ExtraBlocks, ExtraActions>;
    onVideoEnd?: ChatiumActions<ExtraActions>;
    paused?: boolean;
    playInBackground?: boolean;
    playWhenInactive?: boolean;
    repeat?: boolean;
    resizeMode?: 'contain' | 'cover' | 'stretch';
    showControls?: 'full' | 'compact' | 'mini' | 'none';
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
export interface InlineVideoBlock<ExtraBlocks, ExtraActions> extends InlineVideoProps<ExtraBlocks, ExtraActions> {
    type: 'inlineVideo';
}
export declare function InlineVideo<ExtraBlocks, ExtraActions>(props: InlineVideoProps<ExtraBlocks, ExtraActions>): InlineVideoBlock<ExtraBlocks, ExtraActions>;
export {};
