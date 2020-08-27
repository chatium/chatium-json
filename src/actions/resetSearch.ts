export interface ResetSearchAction {
  type: 'resetSearch'
}

export function resetSearch(): ResetSearchAction {
  return {
    type: 'resetSearch',
  }
}
