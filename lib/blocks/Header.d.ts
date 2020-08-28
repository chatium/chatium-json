import { ChatiumAction } from '../actions';
import { Icon, WithKey } from '../commonTypes';
import { ChatiumChildNode } from '../utils/children';
import { ChatiumBlock } from './index';
import { TextBlock } from './Text';
export interface HeaderProps extends WithKey {
    blocks?: ChatiumBlock[];
    compact: boolean;
    logo?: {
        icon: Icon;
        onClick?: ChatiumAction;
        onContext?: ChatiumAction;
    };
    title?: TextBlock;
    description?: TextBlock;
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
export interface HeaderBlock extends HeaderProps {
    type: 'header';
}
declare type Props = Omit<HeaderProps, 'title' | 'description'> & {
    title?: TextBlock | Promise<TextBlock>;
    description?: TextBlock | Promise<TextBlock>;
};
export declare function Header(props: Props, ...children: ChatiumChildNode[]): Promise<HeaderBlock>;
export {};
