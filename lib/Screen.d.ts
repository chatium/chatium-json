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
export interface ChatiumScreen<ExtraActions> {
    title: string;
    description?: string;
    backUrl?: string;
    header?: HeaderProps<ExtraActions>;
    headerButton?: HeaderButton<ExtraActions>;
    headerLeftButton?: HeaderButton<ExtraActions>;
    contextLinks?: ContextLink<ExtraActions>[];
    socketId?: string;
    socketIds?: string[];
    blocks?: ChatiumBlock<ExtraActions>[];
    dropdownMenuBlocks?: ChatiumBlock<ExtraActions>[];
    dropdownMenuInitiallyVisible?: boolean;
    pinnedBlocks?: ChatiumBlock<ExtraActions>[];
    chat?: ChatProps<ExtraActions>;
    fullScreenGallery?: GalleryProps<ExtraActions>;
    footer?: FooterProps<ExtraActions>;
    search?: SearchProps<ExtraActions>;
    needEmailCheck?: boolean;
    needPhoneCheck?: boolean;
    scrollTo?: string;
    logo?: Icon;
    layout?: 'stack' | 'fixed';
    bgColor?: string;
}
export declare type HeaderButton<ExtraActions> = Pick<ButtonProps<ExtraActions>, 'icon' | 'onClick'>;
export interface ContextLink<ExtraActions> {
    title: string;
    icon?: Icon;
    action: ChatiumActions<ExtraActions>;
}
export declare type ScreenProps<ExtraActions> = Omit<ChatiumScreen<ExtraActions>, 'blocks' | 'search' | 'headerButton' | 'pinnedBlocks' | 'backUrl'> & {
    headerButton?: HeaderButton<ExtraActions> | Promise<HeaderButton<ExtraActions>>;
    pinnedBlocks?: ChatiumBlock<ExtraActions>[] | Promise<ChatiumBlock<ExtraActions>[]>;
    backUrl?: string | Promise<string>;
};
/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
export declare function Screen<ExtraActions>(props: ScreenProps<ExtraActions>, ...children: ChatiumChildNode<ExtraActions>[]): Promise<ChatiumScreen<ExtraActions>>;
