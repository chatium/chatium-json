/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import { Audio, AudioProps } from './blocks/Audio'
import { Box, BoxProps } from './blocks/Box'
import { BoxAsText, BoxAsTextProps } from './blocks/BoxAsText'
import { Button, ButtonProps } from './blocks/Button'
import { Embed, EmbedProps } from './blocks/Embed'
import { Footer, FooterProps } from './blocks/Footer'
import { Gallery, GalleryProps } from './blocks/Gallery'
import { Image, ImageProps } from './blocks/Image'
import { ListItem, ListItemProps } from './blocks/ListItem'
import { Search, SearchProps } from './blocks/Search'
import { Slot, SlotProps } from './blocks/Slot'
import { Text, TextProps } from './blocks/Text'
import { Video, VideoProps } from './blocks/Video'
import { VueTemplate, VueTemplateProps } from './blocks/VueTemplate'
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
      box: BoxProps
      'box-as-text': BoxAsTextProps
      button: ButtonProps
      f: {} // analog of React.Fragment, just container of children blocks
      footer: FooterProps
      embed: EmbedProps
      image: ImageProps
      'list-item': ListItemProps
      screen: ScreenProps
      gallery: GalleryProps
      search: SearchProps
      slot: SlotProps
      text: TextProps
      video: VideoProps
      'vue-template': VueTemplateProps
    }
  }
}

export const intrinsicBlocks = {
  audio: Audio,
  box: Box,
  'box-as-text': BoxAsText,
  button: Button,
  f: Fragment,
  footer: Footer,
  image: Image,
  'list-item': ListItem,
  screen: Screen,
  search: Search,
  gallery: Gallery,
  embed: Embed,
  slot: Slot,
  text: Text,
  video: Video,
  'vue-template': VueTemplate,
}
