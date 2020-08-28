import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, FontSize, Icon } from '../commonTypes';
export interface ButtonBlock extends CommonBlockProps {
    type: 'button';
    bgColor?: Color;
    fontColor?: Color;
    fontSize?: FontSize;
    icon?: Icon;
    iconPosition?: 'left' | 'right';
    onClick?: ChatiumActions;
    title?: string;
    buttonType?: 'primary' | 'transparent' | 'headerRight' | 'headerLeft' | 'warning' | 'warningTransparent' | 'flat';
}
export declare type ButtonProps = Omit<ButtonBlock, 'type'>;
export declare function Button(props: ButtonProps): ButtonBlock;
