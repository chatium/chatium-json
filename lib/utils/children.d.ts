import { ChatiumBlock } from '../blocks';
export declare function flattenChildren<ExtraActions>(children: ChatiumChildNode<ExtraActions>[]): Promise<ChatiumBlock<ExtraActions>[]>;
export declare type ChatiumChildNode<ExtraActions> = SyncNode<ExtraActions> | Promise<SyncNode<ExtraActions>>;
declare type SyncNode<ExtraActions> = SingleNode<ExtraActions> | SingleNode<ExtraActions>[];
declare type SingleNode<ExtraActions> = ChatiumBlock<ExtraActions> | null | undefined | false | 0 | '';
export {};
