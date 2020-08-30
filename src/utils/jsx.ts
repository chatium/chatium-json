import { intrinsicBlocks } from '../IntrinsicElements'
import { ChatiumScreen } from '../Screen'
import { ChatiumChildNode } from './children'

/**
 * Creates a jsx-factory function for the given intrinsic chatium blocks
 */
export function jsxFactory<IE extends Record<string, object>, K extends keyof IE, ExtraBlocks, ExtraActions>(
  intrinsicBlocks: Record<K, BlockFactory<ExtraBlocks, ExtraActions, IE[K]>>,
) {
  return function jsx<P>(
    block: BlockFactory<ExtraBlocks, ExtraActions, P> | K,
    props: P | IE[K],
    ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]
  ): JsxNode<ExtraBlocks, ExtraActions> {
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
      return (block as BlockFactory<ExtraBlocks, ExtraActions, P>)(props as P, ...children)
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

interface BlockFactory<ExtraBlocks, ExtraActions, P = {}> {
  (props: P, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): JsxNode<ExtraBlocks, ExtraActions>
}

type JsxNode<ExtraBlocks, ExtraActions> =
  | ChatiumChildNode<ExtraBlocks, ExtraActions>
  | ChatiumChildNode<ExtraBlocks, ExtraActions>[]
  | Promise<ChatiumScreen<ExtraBlocks, ExtraActions>>
