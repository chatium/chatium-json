import { ChatiumScreen } from '../Screen';
import { ChatiumChildNode } from './children';
/**
 * Creates a jsx-factory function for the given intrinsic chatium blocks
 */
export declare function jsxFactory<IE extends Record<string, object>, K extends keyof IE, ExtraActions>(intrinsicBlocks: Record<K, BlockFactory<ExtraActions, IE[K]>>): <P>(block: K | BlockFactory<ExtraActions, P>, props: IE[K] | P, ...children: ChatiumChildNode<ExtraActions>[]) => JsxNode<ExtraActions>;
/**
 * Custom JSX factory for the chatium-json blocks.
 * In tsconfig.json
 *   "jsx": "react",
 *   "jsxFactory": "jsx",
 *
 * Usage in screen-source:
 *  import { jsx } from '@chatium/json'
 */
export declare const jsx: <P>(block: string | BlockFactory<unknown, P>, props: object | P, ...children: ChatiumChildNode<unknown>[]) => JsxNode<unknown>;
interface BlockFactory<ExtraActions, P = {}> {
    (props: P, ...children: ChatiumChildNode<ExtraActions>[]): JsxNode<ExtraActions>;
}
declare type JsxNode<ExtraActions> = ChatiumChildNode<ExtraActions> | ChatiumChildNode<ExtraActions>[] | Promise<ChatiumScreen<ExtraActions>>;
export {};
