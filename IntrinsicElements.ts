/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import { Button, ButtonProps } from './blocks/Button'
import { Fragment } from './blocks/Fragment'
import { Search, SearchProps } from './blocks/Search'
import { Text, TextProps } from './blocks/Text'
import { Screen, ScreenProps } from './Screen'

/**
 * JSX Intrinsic elements support.
 * Only global namespace declaration works unlike documentation
 * @see https://www.typescriptlang.org/docs/handbook/jsx.html#factory-functions
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: ButtonProps
      f: {} // analog of React.Fragment, just container of children blocks
      screen: ScreenProps
      search: SearchProps
      text: TextProps
    }
  }
}

export const intrinsicBlocks = {
  button: Button,
  f: Fragment,
  screen: Screen,
  search: Search,
  text: Text,
}
