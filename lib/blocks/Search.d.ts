import { Color, CommonBlockProps, Icon } from '../commonTypes';
export interface SearchProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
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
export interface SearchBlock<ExtraActions> extends SearchProps<ExtraActions> {
    type: 'search';
}
export declare function Search<ExtraActions>(props: SearchProps<ExtraActions>): SearchBlock<ExtraActions>;
