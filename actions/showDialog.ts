import { LangCtx } from 'core/i18n'

import { Color, ColorPallete } from '../blocks/commonTypes'
import { apiCall, ChatiumAction, ContextMenuItem, showContextMenu } from './index'

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

export function showColorSelector(ctx: LangCtx, props: { submitUrl: string; value: Color }): ChatiumAction {
  const colors = [
    { label: ctx.t('Синий'), value: ColorPallete.Primary },
    { label: ctx.t('Черный'), value: ColorPallete.Black },
    { label: ctx.t('Белый'), value: ColorPallete.White },
    { label: ctx.t('Зеленый'), value: ColorPallete.Success },
    { label: ctx.t('Красный'), value: ColorPallete.Danger },
    { label: ctx.t('Оранжевый'), value: ColorPallete.RedOrange },
    { label: ctx.t('Темно-желтый'), value: ColorPallete.Waiting },
  ]
  const menuItems: ContextMenuItem[] = []

  for (const color of colors) {
    menuItems.push({
      title: color.label + (props.value === color.value ? ` [${ctx.t('Выбрано')}]` : ''),
      onClick: apiCall(props.submitUrl, {
        value: color.value,
      }),
    })
  }
  return showContextMenu(menuItems)
}
