interface ShowDialogCommon {
  type: 'showDialog'
  title?: string
  description?: string
  submitUrl: string
  submitData?: Record<string, unknown>
  submitButtonTitle?: string
  cancelButtonTitle?: string
}

export interface ShowTextDialogAction extends ShowDialogCommon {
  inputType: 'text' | 'code'
  placeholder?: string
  multiline?: boolean
  value?: string
}

export function showTextDialog(options: Omit<ShowTextDialogAction, 'type' | 'inputType'>): ShowTextDialogAction {
  return {
    type: 'showDialog',
    inputType: 'text',
    ...options,
  }
}

export interface ShowDateDialogAction extends ShowDialogCommon {
  inputType: 'date'
  minDate?: string
  maxDate?: string
}

export interface ShowDateAndTimeDialogAction
  extends Omit<ShowDateDialogAction, 'inputType'>,
    Pick<ShowTimeDialogAction, 'minuteInterval'> {
  inputType: 'datetime'
}

export interface ShowTimeDialogAction extends ShowDialogCommon {
  inputType: 'time'
  minuteInterval?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30
}

export type ShowDateTimeDialogAction = ShowDateDialogAction | ShowDateAndTimeDialogAction | ShowTimeDialogAction

export function showDateTimeDialog(
  options: Omit<ShowDateAndTimeDialogAction, 'type' | 'inputType'> | Omit<ShowDateTimeDialogAction, 'type'>,
): ShowDateTimeDialogAction {
  return {
    type: 'showDialog',
    inputType: 'datetime',
    ...options,
  }
}
