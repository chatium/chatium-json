import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, FontSize, FontStyle } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import { ChatiumBlock } from './index';
export declare type TextBlock = TextProps & {
    type: 'text';
    blocks?: ChatiumBlock[];
};
export declare type TextStyle = {
    color?: Color;
    fontSize?: FontSize;
    styles?: FontStyle | FontStyle[];
    isBold?: boolean;
    lineHeight?: number;
};
export declare type TextProps = {
    onClick?: ChatiumActions;
} & TextContent & CommonBlockProps & TextStyle;
export declare type TextContent = {
    text: string;
    tokens?: never;
} | {
    tokens: TextToken[];
    text?: never;
};
export declare type TextToken = string | CustomToken;
interface CustomToken {
    v: string;
    s?: FontStyle[];
    onClick?: ChatiumActions;
}
export declare function Text(props: TextProps, ...children: ChatiumChildNode[]): Promise<TextBlock>;
export declare function EmptyTextBlock(): Promise<TextBlock>;
export declare function ControlText(props: TextProps): Promise<TextBlock>;
export {};
