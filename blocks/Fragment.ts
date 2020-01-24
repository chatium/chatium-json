import { ChatiumChildNode } from '../utils/children'

/**
 * Special JSX fragment block,
 *  useful as a container for multiple children blocks that are inserted into single-block placeholder.
 */
export function Fragment(_props?: {}, ...children: ChatiumChildNode[]): ChatiumChildNode[] {
  return children
}
