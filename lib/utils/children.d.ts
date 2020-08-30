import { ChatiumBlock } from '../blocks';
export declare function flattenChildren<ExtraBlocks, ExtraActions>(children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]): Promise<ChatiumBlock<ExtraBlocks, ExtraActions>[]>;
export declare type ChatiumChildNode<ExtraBlocks, ExtraActions> = SyncNode<ExtraBlocks, ExtraActions> | Promise<SyncNode<ExtraBlocks, ExtraActions>>;
declare type SyncNode<ExtraBlocks, ExtraActions> = SingleNode<ExtraBlocks, ExtraActions> | SingleNode<ExtraBlocks, ExtraActions>[];
declare type SingleNode<ExtraBlocks, ExtraActions> = ChatiumBlock<ExtraBlocks, ExtraActions> | null | undefined | false | 0 | '';
export {};
