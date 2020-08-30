import { ChatiumChildNode } from './children';
/**
 * Special JSX fragment block,
 *  useful as a container for multiple children blocks that are inserted into single-block placeholder.
 */
export declare function Fragment<ExtraBlocks, ExtraActions>(_props?: {}, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): ChatiumChildNode<ExtraBlocks, ExtraActions>[];
