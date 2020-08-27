import { intrinsicBlocks } from '../IntrinsicElements'
import { ChatiumScreen } from '../Screen'
import { ChatiumChildNode } from './children'

/**
 * Creates a jsx-factory function for the given intrinsic chatium blocks
 */
export function jsxFactory<K extends keyof JSX.IntrinsicElements>(
  intrinsicBlocks: Record<K, BlockFactory<JSX.IntrinsicElements[K]>>,
) {
  return function jsx<P>(
    block: BlockFactory<P> | K,
    props: P | JSX.IntrinsicElements[K],
    ...children: ChatiumChildNode[]
  ): JsxNode {
    if (typeof block === 'string') {
      if (intrinsicBlocks[block]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return intrinsicBlocks[block]((props ?? {}) as any, ...children)
      } else {
        throw new Error(
          `JSX error: unknown intrinsic block '${block}'. ` +
            `List of known intrinsic block types: ${Object.keys(intrinsicBlocks)}'`,
        )
      }
    } else {
      return block(props as P, ...children)
    }
  }
}

/**
 * Custom JSX factory for the chatium-json blocks.
 * In tsconfig.json
 *   "jsx": "react",
 *   "jsxFactory": "jsx",
 *
 * Usage in screen-source:
 *  import { jsx } from '@chatium/json'
 */
export const jsx = jsxFactory(intrinsicBlocks as any)

interface BlockFactory<P = {}> {
  (props: P, ...children: ChatiumChildNode[]): JsxNode
}

type JsxNode = ChatiumChildNode | ChatiumChildNode[] | Promise<ChatiumScreen>
