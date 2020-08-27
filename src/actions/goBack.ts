export interface GoBackAction {
  type: 'goBack'
}

export function goBack(): GoBackAction {
  return {
    type: 'goBack',
  }
}
