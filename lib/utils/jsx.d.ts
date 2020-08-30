import { ChatiumScreen } from '../Screen';
import { ChatiumChildNode } from './children';
/**
 * Creates a jsx-factory function for the given intrinsic chatium blocks
 */
export declare function jsxFactory<IE extends Record<string, object>, K extends keyof IE, ExtraBlocks, ExtraActions>(intrinsicBlocks: Record<K, BlockFactory<ExtraBlocks, ExtraActions, IE[K]>>): <P>(block: K | BlockFactory<ExtraBlocks, ExtraActions, P>, props: IE[K] | P, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]) => JsxNode<ExtraBlocks, ExtraActions>;
/**
 * Custom JSX factory for the chatium-json blocks.
 * In tsconfig.json
 *   "jsx": "react",
 *   "jsxFactory": "jsx",
 *
 * Usage in screen-source:
 *  import { jsx } from '@chatium/json'
 */
export declare const jsx: <P>(block: string | BlockFactory<unknown, unknown, P>, props: object | P, ...children: unknown[]) => unknown;
interface BlockFactory<ExtraBlocks, ExtraActions, P = {}> {
    (props: P, ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): JsxNode<ExtraBlocks, ExtraActions>;
}
declare type JsxNode<ExtraBlocks, ExtraActions> = ChatiumChildNode<ExtraBlocks, ExtraActions> | ChatiumChildNode<ExtraBlocks, ExtraActions>[] | Promise<ChatiumScreen<ExtraBlocks, ExtraActions>>;
export {};
