import type { ChatiumActions } from '../actions';
import type { CommonBlockProps } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import type { ChatiumBlock } from './index';
export declare type GalleryBlock<ExtraActions> = GalleryProps<ExtraActions> & {
    type: 'gallery';
};
export declare type GalleryProps<ExtraActions> = {
    onClick?: ChatiumActions<ExtraActions>;
    initialSlideIndex?: number;
    slides?: Array<{
        content?: ChatiumBlock<ExtraActions>;
    } | {
        blocks?: ChatiumBlock<ExtraActions>[];
    }>;
} & CommonBlockProps<ExtraActions>;
export declare function Gallery<ExtraActions>(props: GalleryProps<ExtraActions>, ...children: ChatiumChildNode<ExtraActions>[]): Promise<GalleryBlock<ExtraActions>>;
