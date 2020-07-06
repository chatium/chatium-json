export interface EmptyAction {
  type: 'empty'
}

export function emptyAction(): EmptyAction {
  return {
    type: 'empty',
  }
}
