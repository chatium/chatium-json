import type { ChatiumActions } from '../actions';
import type { CommonBlockProps } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import type { ChatiumBlock } from './index';
export declare type GalleryBlock = GalleryProps & {
    type: 'gallery';
};
export declare type GalleryProps = {
    onClick?: ChatiumActions;
    initialSlideIndex?: number;
    slides?: Array<{
        content?: ChatiumBlock;
    } | {
        blocks?: ChatiumBlock[];
    }>;
} & CommonBlockProps;
export declare function Gallery(props: GalleryProps, ...children: ChatiumChildNode[]): Promise<GalleryBlock>;
