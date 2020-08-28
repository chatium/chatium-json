import { ChatiumActions } from '../actions';
import { CommonBlockProps, OverlayProps } from '../commonTypes';
interface CommonVideoProps extends CommonBlockProps {
    hlsUrl?: string;
    imageUrl?: string;
    mp4Url?: string;
    videoAspectRatio?: [number, number];
}
export interface VideoBlock extends CommonVideoProps {
    type: 'video';
    url?: string;
    file?: {
        hash: string;
    };
}
export declare type VideoProps = Omit<VideoBlock, 'type'>;
export declare function Video(props: VideoProps): VideoBlock;
export interface InlineVideoBlock extends CommonVideoProps {
    type: 'inlineVideo';
    ignoreSilentSwitch?: 'ignore' | 'obey';
    muted?: boolean;
    onProgressChange?: ProgressChangeProps[];
    overlay?: OverlayProps;
    onVideoEnd?: ChatiumActions;
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
export interface ProgressChangeProps {
    cond: string;
    action: ChatiumActions;
}
export interface VideoSize {
    width: number;
    height: number;
}
export declare type InlineVideoProps = Omit<InlineVideoBlock, 'type'>;
export declare function InlineVideo(props: InlineVideoProps): InlineVideoBlock;
export {};
