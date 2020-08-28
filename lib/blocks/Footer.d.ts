import { CommonBlockProps } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import { ChatiumBlock } from './index';
export interface FooterProps extends CommonBlockProps {
    blocks?: ChatiumBlock[];
    visibleAlways?: boolean;
}
export interface FooterBlock extends FooterProps {
    type: 'footer';
}
export declare function Footer(props: FooterProps, ...children: ChatiumChildNode[]): Promise<FooterBlock>;
