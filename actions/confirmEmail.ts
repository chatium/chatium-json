export interface ConfirmEmailAction {
  type: 'confirmEmail'
}

export function confirmEmail(): ConfirmEmailAction {
  return {
    type: 'confirmEmail',
  }
}
