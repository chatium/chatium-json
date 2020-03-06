export interface SubmitAction {
  type: 'submit'
}

export function submit(): SubmitAction {
  return {
    type: 'submit',
  }
}
