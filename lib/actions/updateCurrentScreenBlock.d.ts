import type { ChatiumJsonId } from '../commonTypes';
export interface UpdateCurrentScreenBlock<P = unknown> {
    type: 'updateCurrentScreenBlock';
    blockId: ChatiumJsonId;
    merge?: boolean;
    update: P;
}
export declare function updateCurrentScreenBlock<P>(blockId: string, update: P, merge?: boolean): UpdateCurrentScreenBlock<P>;
