import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, FontSize, Icon } from '../commonTypes';
export interface ButtonProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
    bgColor?: Color;
    fontColor?: Color;
    fontSize?: FontSize;
    icon?: Icon;
    iconPosition?: 'left' | 'right';
    onClick?: ChatiumActions<ExtraActions>;
    title?: string;
    buttonType?: 'primary' | 'transparent' | 'headerRight' | 'headerLeft' | 'warning' | 'warningTransparent' | 'flat';
}
export interface ButtonBlock<ExtraActions> extends ButtonProps<ExtraActions> {
    type: 'button';
}
export declare function Button<ExtraActions>(props: ButtonProps<ExtraActions>): ButtonBlock<ExtraActions>;
