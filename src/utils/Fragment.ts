import { ChatiumChildNode } from './children'

/**
 * Special JSX fragment block,
 *  useful as a container for multiple children blocks that are inserted into single-block placeholder.
 */
export function Fragment<ExtraActions>(
  _props?: {},
  ...children: ChatiumChildNode<ExtraActions>[]
): ChatiumChildNode<ExtraActions>[] {
  return children
}
