import { ChatiumBlock } from '../blocks';
export declare function flattenChildren<ExtraBlocks, ExtraActions>(children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): Promise<ChatiumBlock<ExtraBlocks, ExtraActions>[]>;
export declare function isPromise<ExtraBlocks, ExtraActions>(b: ChatiumChildNode<ExtraBlocks, ExtraActions>): b is Promise<SyncNode<ExtraBlocks, ExtraActions>>;
export declare type ChatiumChildNode<ExtraBlocks, ExtraActions> = SyncNode<ExtraBlocks, ExtraActions> | Promise<SyncNode<ExtraBlocks, ExtraActions>>;
declare type SyncNode<ExtraBlocks, ExtraActions> = SingleNode<ExtraBlocks, ExtraActions> | SingleNode<ExtraBlocks, ExtraActions>[];
declare type SingleNode<ExtraBlocks, ExtraActions> = ChatiumBlock<ExtraBlocks, ExtraActions> | null | undefined | false | 0 | '';
/**
 * Compact auto-generated key encoding.
 * 0-91 are encoded using single character
 * 92-8463 are encoded using ' + two characters
 * 8464-778687 are encoded using ` + three characters
 * Highrer numbers are not supported and return empty string
 * @param idx - must be natural int
 */
export declare function encodeIndex(idx: number): string;
export {};
