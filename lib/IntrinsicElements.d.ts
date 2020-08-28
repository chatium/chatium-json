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
 * JSX Intrinsic elements support.
 * Only global namespace declaration works unlike documentation
 * @see https://www.typescriptlang.org/docs/handbook/jsx.html#factory-functions
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            audio: AudioProps;
            button: ButtonProps;
            f: {};
            footer: FooterProps;
            gallery: GalleryProps;
            header: HeaderProps;
            image: ImageProps;
            'list-item': ListItemProps;
            'horizontal-cards': HorizontalCardsProps;
            screen: ScreenProps;
            search: SearchProps;
            text: TextProps;
            video: VideoProps;
        }
    }
}
export declare const intrinsicBlocks: {
    audio: typeof Audio;
    'horizontal-cards': typeof HorizontalCards;
    button: typeof Button;
    f: typeof Fragment;
    footer: typeof Footer;
    gallery: typeof Gallery;
    header: typeof Header;
    image: typeof Image;
    'list-item': typeof ListItem;
    screen: typeof Screen;
    search: typeof Search;
    text: typeof Text;
    video: typeof Video;
};
