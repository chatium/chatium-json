/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-namespace */
import { Button, ButtonProps } from './blocks/Button'
import { ChatiumChildNode, ChatiumScreen, Screen, ScreenProps } from './Screen'
import { Search, SearchProps } from './blocks/Search'

/**
 * Custom JSX factory for the chatium-json blocks.
 * In tsconfig.json
 *   "jsx": "react",
 *   "jsxFactory": "jsx",
 *
 * Usage in screen-source:
 *  import { jsx } from 'chatium-json'
 */
export function jsx<P, K extends keyof JSX.IntrinsicElements>(
  block: BlockFactory<P> | K,
  props: P | JSX.IntrinsicElements[K],
  ...children: ChatiumChildNode[]
): JsxNode {
  if (typeof block === 'string') {
    if (intrinsicBlocks[block]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return intrinsicBlocks[block](props as any, ...children)
    } else {
      throw new Error(
        `JSX error: unknown intrinsic element '${block}. ` +
          `List of known intrinsic block types: ${Object.keys(intrinsicBlocks)}'`,
      )
    }
  } else {
    return block(props as P, ...children)
  }
}

interface BlockFactory<P = {}> {
  (props: P, ...children: ChatiumChildNode[]): JsxNode
}

type JsxNode = ChatiumChildNode | Promise<ChatiumScreen>

/**
 * Intrinsic elements support.
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

const intrinsicBlocks = {
  button: Button,
  screen: Screen,
  search: Search,
}
