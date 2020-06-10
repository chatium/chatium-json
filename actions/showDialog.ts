//Необходим какой-то более обобщенный экшн, который позволит отправлять POST с выбранными полями экрана (см Field в этом же реквесте)
//Опять же, чтобы закрыть тему с произвольными формами
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

export function showTextDialog(options: Omit<ShowDialogInputTypeText, 'type' | 'inputType'>): ShowDialogInputTypeText {
  return {
    type: 'showDialog',
    inputType: 'text',
    ...options,
  }
}
