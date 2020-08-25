export interface NoopAction {
  type: 'noop'
}

export function noop(): NoopAction {
  return {
    type: 'noop',
  }
}
