import { Color, CommonBlockProps, Icon } from '../commonTypes';
export interface SearchProps extends CommonBlockProps {
    bgColor?: Color;
    borderColor?: Color;
    defaultValue?: string;
    delayMs?: number;
    fontColor?: Color;
    inputPlaceholder?: string;
    leftIcon?: Icon;
    minLength?: number;
    placeholderTextColor?: Color;
    queryParamKey: string;
    spinnerColor?: Color;
}
export interface SearchBlock extends SearchProps {
    type: 'search';
}
export declare function Search(props: SearchProps): SearchBlock;
