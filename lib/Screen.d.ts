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
export interface ChatiumScreen<ExtraBlocks, ExtraActions> {
    title: string;
    description?: string;
    backUrl?: string;
    header?: HeaderProps<ExtraBlocks, ExtraActions>;
    headerButton?: HeaderButton<ExtraBlocks, ExtraActions>;
    headerLeftButton?: HeaderButton<ExtraBlocks, ExtraActions>;
    contextLinks?: ContextLink<ExtraActions>[];
    socketId?: string;
    socketIds?: string[];
    blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[];
    dropdownMenuBlocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[];
    dropdownMenuInitiallyVisible?: boolean;
    pinnedBlocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[];
    chat?: ChatProps<ExtraActions>;
    fullScreenGallery?: GalleryProps<ExtraBlocks, ExtraActions>;
    footer?: FooterProps<ExtraBlocks, ExtraActions>;
    search?: SearchProps<ExtraBlocks, ExtraActions>;
    needEmailCheck?: boolean;
    needPhoneCheck?: boolean;
    scrollTo?: string;
    logo?: Icon;
    layout?: 'mobile' | 'desktop';
    bgColor?: string;
    meta?: unknown;
    v?: 1 | 2;
}
export declare type HeaderButton<ExtraBlocks, ExtraActions> = Pick<ButtonProps<ExtraBlocks, ExtraActions>, 'icon' | 'onClick'>;
export interface ContextLink<ExtraActions> {
    title: string;
    icon?: Icon;
    action: ChatiumActions<ExtraActions>;
}
export declare type ScreenProps<ExtraBlocks, ExtraActions> = Omit<ChatiumScreen<ExtraBlocks, ExtraActions>, 'blocks' | 'search' | 'headerButton' | 'pinnedBlocks' | 'backUrl'> & {
    headerButton?: HeaderButton<ExtraBlocks, ExtraActions> | Promise<HeaderButton<ExtraBlocks, ExtraActions>>;
    pinnedBlocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[] | Promise<ChatiumBlock<ExtraBlocks, ExtraActions>[]>;
    backUrl?: string | Promise<string>;
};
/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
export declare function Screen<ExtraBlocks, ExtraActions>(props: ScreenProps<ExtraBlocks, ExtraActions>, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): Promise<ChatiumScreen<ExtraBlocks, ExtraActions>>;
