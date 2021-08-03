export interface GoBackAction {
  type: 'goBack'
  dismissModal?: boolean
}

export function goBack(options?: Omit<GoBackAction, 'type'>): GoBackAction {
  return {
    type: 'goBack',
    ...options,
  }
}
