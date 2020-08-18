export interface UpdateCurrentScreenBlock<P = unknown> {
  type: 'updateCurrentScreenBlock'
  blockId: string
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
