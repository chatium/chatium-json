import type { ChatiumActions } from './actions';
import type { ChatiumBlock } from './blocks';
import type { ButtonProps } from './blocks/Button';
import type { FooterProps } from './blocks/Footer';
import type { GalleryProps } from './blocks/Gallery';
import type { HeaderProps } from './blocks/Header';
import type { SearchProps } from './blocks/Search';
import type { ChatProps } from './Chat';
import type { Icon } from './commonTypes';
import { ChatiumChildNode } from './utils/children';
export interface ChatiumScreen {
    title: string;
    description?: string;
    backUrl?: string;
    header?: HeaderProps;
    headerButton?: HeaderButton;
    headerLeftButton?: HeaderButton;
    contextLinks?: ContextLink[];
    socketId?: string;
    socketIds?: string[];
    blocks?: ChatiumBlock[];
    dropdownMenuBlocks?: ChatiumBlock[];
    dropdownMenuInitiallyVisible?: boolean;
    pinnedBlocks?: ChatiumBlock[];
    chat?: ChatProps;
    fullScreenGallery?: GalleryProps;
    footer?: FooterProps;
    search?: SearchProps;
    needEmailCheck?: boolean;
    needPhoneCheck?: boolean;
    scrollTo?: string;
    logo?: Icon;
    layout?: 'stack' | 'fixed';
    bgColor?: string;
}
export declare type HeaderButton = Pick<ButtonProps, 'icon' | 'onClick'>;
export interface ContextLink {
    title: string;
    icon?: Icon;
    action: ChatiumActions;
}
export declare type ScreenProps = Omit<ChatiumScreen, 'blocks' | 'search' | 'headerButton' | 'pinnedBlocks' | 'backUrl'> & {
    headerButton?: HeaderButton | Promise<HeaderButton>;
    pinnedBlocks?: ChatiumBlock[] | Promise<ChatiumBlock[]>;
    backUrl?: string | Promise<string>;
};
/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
export declare function Screen(props: ScreenProps, ...children: ChatiumChildNode[]): Promise<ChatiumScreen>;
