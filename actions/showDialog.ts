interface ShowDialogCommon {
  type: 'showDialog'
  title?: string
  description?: string
  submitUrl: string
  submitButtonTitle?: string
  cancelButtonTitle?: string
}

interface ShowDialogInputTypeText extends ShowDialogCommon {
  inputType: 'text' | 'code'
  placeholder?: string
  multiline?: boolean
  value?: string
}

export type ShowDialogAction = ShowDialogInputTypeText

export function showTextDialog(options: Omit<ShowDialogInputTypeText, 'type' | 'inputType'>): ShowDialogInputTypeText {
  return {
    type: 'showDialog',
    inputType: 'text',
    ...options,
  }
}

export function showCodeDialog(options: Omit<ShowDialogInputTypeText, 'type' | 'inputType'>): ShowDialogInputTypeText {
  return {
    type: 'showDialog',
    inputType: 'text',
    ...options,
  }
}
