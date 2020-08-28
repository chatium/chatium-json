import { ChatiumBlock } from '../blocks';
export declare function flattenChildren(children: ChatiumChildNode[]): Promise<ChatiumBlock[]>;
export declare type ChatiumChildNode = SyncNode | Promise<SyncNode>;
declare type SyncNode = SingleNode | SingleNode[];
declare type SingleNode = ChatiumBlock | null | undefined | false | 0 | '';
export {};
