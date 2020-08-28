import { ChatiumActions } from '../actions';
import { CommonBlockProps } from '../commonTypes';
export interface ImageBlock extends CommonBlockProps {
    type: 'image';
    downloadUrl: string;
    onClick?: ChatiumActions;
    width?: number;
    height?: number;
    image?: any;
    resizeMode?: string;
    imageSize?: {
        width: number;
        height: number;
    };
}
export declare type ImageProps = Omit<ImageBlock, 'type'>;
export declare function Image(props: ImageProps): ImageBlock;
