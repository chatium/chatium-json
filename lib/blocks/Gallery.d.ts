import type { ChatiumActions } from '../actions';
import type { CommonBlockProps } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import type { ChatiumBlock } from './index';
export declare type GalleryBlock<ExtraBlocks, ExtraActions> = GalleryProps<ExtraBlocks, ExtraActions> & {
    type: 'gallery';
};
export declare type GalleryProps<ExtraBlocks, ExtraActions> = {
    onClick?: ChatiumActions<ExtraActions>;
    initialSlideIndex?: number;
    slides?: Array<{
        content?: ChatiumBlock<ExtraBlocks, ExtraActions>;
    } | {
        blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[];
    }>;
} & CommonBlockProps<ExtraBlocks, ExtraActions>;
export declare function Gallery<ExtraBlocks, ExtraActions>(props: GalleryProps<ExtraBlocks, ExtraActions>, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): Promise<GalleryBlock<ExtraBlocks, ExtraActions>>;
