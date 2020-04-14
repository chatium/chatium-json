export interface ConfirmPhoneAction {
  type: 'confirmPhone'
}

export function confirmPhone(): ConfirmPhoneAction {
  return {
    type: 'confirmPhone',
  }
}
