export interface RefreshAction {
  type: 'refresh'
}

export function refresh(): RefreshAction {
  return {
    type: 'refresh',
  }
}
