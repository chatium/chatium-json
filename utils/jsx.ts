import { intrinsicBlocks } from '../IntrinsicElements'
import { ChatiumScreen } from '../Screen'
import { ChatiumChildNode } from './children'

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
