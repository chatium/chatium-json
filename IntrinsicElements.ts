/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import { Audio, AudioProps } from './blocks/Audio'
import { Button, ButtonProps } from './blocks/Button'
import { Footer, FooterProps } from './blocks/Footer'
import { Image, ImageProps } from './blocks/Image'
import { ListItem, ListItemProps } from './blocks/ListItem'
import { Search, SearchProps } from './blocks/Search'
import { Text, TextProps } from './blocks/Text'
import { Screen, ScreenProps } from './Screen'
import { Video, VideoProps } from './blocks/Video'
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
      button: ButtonProps
      f: {} // analog of React.Fragment, just container of children blocks
      footer: FooterProps
      image: ImageProps
      'list-item': ListItemProps
      screen: ScreenProps
      search: SearchProps
      text: TextProps
      video: VideoProps
    }
  }
}

export const intrinsicBlocks = {
  audio: Audio,
  button: Button,
  f: Fragment,
  footer: Footer,
  image: Image,
  'list-item': ListItem,
  screen: Screen,
  search: Search,
  text: Text,
  video: Video,
}
