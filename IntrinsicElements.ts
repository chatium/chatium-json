/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import { BoxAsText, BoxAsTextProps } from '../private-json/blocks/BoxAsText'
import { Audio, AudioProps } from './blocks/Audio'
import { Button, ButtonProps } from './blocks/Button'
import { Footer, FooterProps } from './blocks/Footer'
import { Gallery, GalleryProps } from './blocks/Gallery'
import { Header, HeaderProps } from './blocks/Header'
import { HorizontalCards, HorizontalCardsProps } from './blocks/HorizontalCards'
import { Image, ImageProps } from './blocks/Image'
import { ListItem, ListItemProps } from './blocks/ListItem'
import { Search, SearchProps } from './blocks/Search'
import { Text, TextProps } from './blocks/Text'
import { Video, VideoProps } from './blocks/Video'
import { Screen, ScreenProps } from './Screen'
import { Fragment } from './utils/Fragment'

/**
 * JSX Intrinsic elements support.
 * Only global namespace declaration works unlike documentation
 * @see https://www.typescriptlang.org/docs/handbook/jsx.html#factory-functions
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      audio: AudioProps
      'box-as-text': BoxAsTextProps
      button: ButtonProps
      f: {} // analog of React.Fragment, just container of children blocks
      footer: FooterProps
      gallery: GalleryProps
      header: HeaderProps
      image: ImageProps
      'list-item': ListItemProps
      'horizontal-cards': HorizontalCardsProps
      screen: ScreenProps
      search: SearchProps
      text: TextProps
      video: VideoProps
    }
  }
}

export const intrinsicBlocks = {
  audio: Audio,
  'box-as-text': BoxAsText,
  'horizontal-cards': HorizontalCards,
  button: Button,
  f: Fragment,
  footer: Footer,
  gallery: Gallery,
  header: Header,
  image: Image,
  'list-item': ListItem,
  screen: Screen,
  search: Search,
  text: Text,
  video: Video,
}
