import { ChatiumChildNode } from './Screen'

/**
 * Custom JSX factory for the chatium-json blocks.
 * In tsconfig.json
 *   "jsx": "react",
 *   "jsxFactory": "jsx",
 *
 * Usage in screen-source:
 *  import { jsx } from 'chatium-json'
 */
export function jsx<P>(blockFn: BlockFactory<P>, props: P, ...children: ChatiumChildNode[]): ChatiumChildNode {
  return blockFn(props, ...children)
}

interface BlockFactory<P = {}> {
  (props: P, ...children: ChatiumChildNode[]): ChatiumChildNode
}
