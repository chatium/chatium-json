import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, FontSize, FontStyle } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import { ChatiumBlock } from './index';
export declare type TextBlock<ExtraBlocks, ExtraActions> = TextProps<ExtraBlocks, ExtraActions> & {
    type: 'text';
    blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[];
};
export declare type TextStyle = {
    color?: Color;
    fontSize?: FontSize;
    styles?: FontStyle | FontStyle[];
    isBold?: boolean;
    lineHeight?: number;
};
export declare type TextProps<ExtraBlocks, ExtraActions> = {
    onClick?: ChatiumActions<ExtraActions>;
} & TextContent<ExtraActions> & CommonBlockProps<ExtraBlocks, ExtraActions> & TextStyle;
export declare type TextContent<ExtraActions> = {
    text: string;
    tokens?: never;
} | {
    tokens: TextToken<ExtraActions>[];
    text?: never;
};
export declare type TextToken<ExtraActions> = string | CustomToken<ExtraActions>;
interface CustomToken<ExtraActions> {
    v: string;
    s?: FontStyle[];
    onClick?: ChatiumActions<ExtraActions>;
}
export declare function Text<ExtraBlocks, ExtraActions>(props: TextProps<ExtraBlocks, ExtraActions>, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): Promise<TextBlock<ExtraBlocks, ExtraActions>>;
export {};
