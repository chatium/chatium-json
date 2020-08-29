import { ChatiumActions } from '../actions';
import { CommonBlockProps } from '../commonTypes';
export interface ImageProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
    downloadUrl: string;
    onClick?: ChatiumActions<ExtraActions>;
    width?: number;
    height?: number;
    image?: any;
    resizeMode?: string;
    imageSize?: {
        width: number;
        height: number;
    };
}
export interface ImageBlock<ExtraActions> extends ImageProps<ExtraActions> {
    type: 'image';
}
export declare function Image<ExtraActions>(props: ImageProps<ExtraActions>): ImageBlock<ExtraActions>;
