import { CommonBlockProps } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import { ChatiumBlock } from './index';
export interface FooterProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
    blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[];
    visibleAlways?: boolean;
}
export interface FooterBlock<ExtraBlocks, ExtraActions> extends FooterProps<ExtraBlocks, ExtraActions> {
    type: 'footer';
}
export declare function Footer<ExtraBlocks, ExtraActions>(props: FooterProps<ExtraBlocks, ExtraActions>, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): Promise<FooterBlock<ExtraBlocks, ExtraActions>>;
