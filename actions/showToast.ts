export interface ShowToastAction {
  type: 'showToast'
  toast: string
}

export function showToast(toast: string): ShowToastAction {
  return {
    type: 'showToast',
    toast,
  }
}
