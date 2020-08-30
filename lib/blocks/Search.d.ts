import { Color, CommonBlockProps, Icon } from '../commonTypes';
export interface SearchProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
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
export interface SearchBlock<ExtraBlocks, ExtraActions> extends SearchProps<ExtraBlocks, ExtraActions> {
    type: 'search';
}
export declare function Search<ExtraBlocks, ExtraActions>(props: SearchProps<ExtraBlocks, ExtraActions>): SearchBlock<ExtraBlocks, ExtraActions>;
