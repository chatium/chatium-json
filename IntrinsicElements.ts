/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import { Audio, AudioProps } from './blocks/Audio'
import { Button, ButtonProps } from './blocks/Button'
import { Fragment } from './blocks/Fragment'
import { Image, ImageProps } from './blocks/Image'
import { Search, SearchProps } from './blocks/Search'
import { Text, TextProps } from './blocks/Text'
import { Screen, ScreenProps } from './Screen'
import { Video, VideoProps } from './blocks/Video'

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
      image: ImageProps
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
  image: Image,
  screen: Screen,
  search: Search,
  text: Text,
  video: Video,
}
