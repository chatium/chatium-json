import { Audio, AudioProps } from './blocks/Audio';
import { Button, ButtonProps } from './blocks/Button';
import { Footer, FooterProps } from './blocks/Footer';
import { Gallery, GalleryProps } from './blocks/Gallery';
import { Header, HeaderProps } from './blocks/Header';
import { HorizontalCards, HorizontalCardsProps } from './blocks/HorizontalCards';
import { Image, ImageProps } from './blocks/Image';
import { ListItem, ListItemProps } from './blocks/ListItem';
import { Search, SearchProps } from './blocks/Search';
import { Text, TextProps } from './blocks/Text';
import { Video, VideoProps } from './blocks/Video';
import { Screen, ScreenProps } from './Screen';
import { Fragment } from './utils/Fragment';
/**
 * JSX Intrinsic elements support for chatium blocks.
 * To enable jsx typings:
 * ```
 * declare global {
 *   namespace JSX {
 *     interface IntrinsicElements extends ChatiumIntrinsicElements<never> {
 *       // here may be some additional elements declarations
 *     }
 *   }
 * }
 * ```
 */
export interface ChatiumIntrinsicElements<ExtraActions> {
    audio: AudioProps<ExtraActions>;
    button: ButtonProps<ExtraActions>;
    f: {};
    footer: FooterProps<ExtraActions>;
    gallery: GalleryProps<ExtraActions>;
    header: HeaderProps<ExtraActions>;
    image: ImageProps<ExtraActions>;
    'list-item': ListItemProps<ExtraActions>;
    'horizontal-cards': HorizontalCardsProps<ExtraActions>;
    screen: ScreenProps<ExtraActions>;
    search: SearchProps<ExtraActions>;
    text: TextProps<ExtraActions>;
    video: VideoProps<ExtraActions>;
}
export declare const intrinsicBlocks: {
    audio: typeof Audio;
    button: typeof Button;
    f: typeof Fragment;
    footer: typeof Footer;
    gallery: typeof Gallery;
    header: typeof Header;
    'horizontal-cards': typeof HorizontalCards;
    image: typeof Image;
    'list-item': typeof ListItem;
    screen: typeof Screen;
    search: typeof Search;
    text: typeof Text;
    video: typeof Video;
};
