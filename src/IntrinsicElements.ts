/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
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
export interface ChatiumIntrinsicElements<ExtraBlocks, ExtraActions> {
  audio: AudioProps<ExtraBlocks, ExtraActions>
  button: ButtonProps<ExtraBlocks, ExtraActions>
  f: {} // analog of React.Fragment, just container of children blocks
  footer: FooterProps<ExtraBlocks, ExtraActions>
  gallery: GalleryProps<ExtraBlocks, ExtraActions>
  header: HeaderProps<ExtraBlocks, ExtraActions>
  image: ImageProps<ExtraBlocks, ExtraActions>
  'list-item': ListItemProps<ExtraBlocks, ExtraActions>
  'horizontal-cards': HorizontalCardsProps<ExtraBlocks, ExtraActions>
  screen: ScreenProps<ExtraBlocks, ExtraActions>
  search: SearchProps<ExtraBlocks, ExtraActions>
  text: TextProps<ExtraBlocks, ExtraActions>
  video: VideoProps<ExtraBlocks, ExtraActions>
}

export const intrinsicBlocks = {
  audio: Audio,
  button: Button,
  f: Fragment,
  footer: Footer,
  gallery: Gallery,
  header: Header,
  'horizontal-cards': HorizontalCards,
  image: Image,
  'list-item': ListItem,
  screen: Screen,
  search: Search,
  text: Text,
  video: Video,
}
