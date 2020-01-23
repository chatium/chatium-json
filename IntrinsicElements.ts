/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import { Button, ButtonProps } from './blocks/Button'
import { Search, SearchProps } from './blocks/Search'
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
      screen: ScreenProps
      search: SearchProps
    }
  }
}

export const intrinsicBlocks = {
  button: Button,
  screen: Screen,
  search: Search,
}
