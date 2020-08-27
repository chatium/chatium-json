import type { ChatiumJsonId } from '../commonTypes'

export interface UpdateCurrentScreenBlock<P = unknown> {
  type: 'updateCurrentScreenBlock'
  blockId: ChatiumJsonId
  merge?: boolean
  data: P
}

export function updateCurrentScreenBlock<P>(blockId: string, data: P, merge?: boolean): UpdateCurrentScreenBlock<P> {
  return {
    type: 'updateCurrentScreenBlock',
    blockId,
    merge,
    data,
  }
}
