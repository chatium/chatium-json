import { ChatiumActions } from '../actions';
import { Icon, WithKey } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import { ChatiumBlock } from './index';
import { TextBlock } from './Text';
export interface HeaderProps<ExtraActions> extends WithKey {
    blocks?: ChatiumBlock<ExtraActions>[];
    compact: boolean;
    logo?: {
        icon: Icon;
        onClick?: ChatiumActions<ExtraActions>;
        onContext?: ChatiumActions<ExtraActions>;
    };
    title?: TextBlock<ExtraActions>;
    description?: TextBlock<ExtraActions>;
    bottomGradientColors?: string[];
    topGradientColors?: string[];
    image?: {
        downloadUrl: string;
        imageSize: {
            width: number;
            height: number;
        };
    };
}
export interface HeaderBlock<ExtraActions> extends HeaderProps<ExtraActions> {
    type: 'header';
}
export declare type HeaderFnProps<ExtraActions> = Omit<HeaderProps<ExtraActions>, 'title' | 'description'> & {
    title?: TextBlock<ExtraActions> | Promise<TextBlock<ExtraActions>>;
    description?: TextBlock<ExtraActions> | Promise<TextBlock<ExtraActions>>;
};
export declare function Header<ExtraActions>(props: HeaderFnProps<ExtraActions>, ...children: ChatiumChildNode<ExtraActions>[]): Promise<HeaderBlock<ExtraActions>>;
