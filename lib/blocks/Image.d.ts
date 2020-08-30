import { ChatiumActions } from '../actions';
import { CommonBlockProps } from '../commonTypes';
export interface ImageProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
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
export interface ImageBlock<ExtraBlocks, ExtraActions> extends ImageProps<ExtraBlocks, ExtraActions> {
    type: 'image';
}
export declare function Image<ExtraBlocks, ExtraActions>(props: ImageProps<ExtraBlocks, ExtraActions>): ImageBlock<ExtraBlocks, ExtraActions>;
