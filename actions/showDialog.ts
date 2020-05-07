interface ShowDialogCommon {
  type: 'showDialog'
  title?: string
  description?: string
  submitUrl: string
  submitButtonTitle?: string
  cancelButtonTitle?: string
}

interface ShowDialogInputTypeText extends ShowDialogCommon {
  inputType: 'text'
  placeholder?: string
  multiline?: boolean
  value?: string
}

export type ShowDialogAction = ShowDialogInputTypeText
