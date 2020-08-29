import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, FontSize, FontStyle } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import { ChatiumBlock } from './index';
export declare type TextBlock<ExtraActions> = TextProps<ExtraActions> & {
    type: 'text';
    blocks?: ChatiumBlock<ExtraActions>[];
};
export declare type TextStyle = {
    color?: Color;
    fontSize?: FontSize;
    styles?: FontStyle | FontStyle[];
    isBold?: boolean;
    lineHeight?: number;
};
export declare type TextProps<ExtraActions> = {
    onClick?: ChatiumActions<ExtraActions>;
} & TextContent<ExtraActions> & CommonBlockProps<ExtraActions> & TextStyle;
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
export declare function Text<ExtraActions>(props: TextProps<ExtraActions>, ...children: ChatiumChildNode<ExtraActions>[]): Promise<TextBlock<ExtraActions>>;
export {};
