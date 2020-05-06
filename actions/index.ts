import { submit, SubmitAction } from 'lib/chatium-json/actions/submit'

import { apiCall, ApiCallAction } from './apiCall'
import { ConfirmEmailAction } from './confirmEmail'
import { ConfirmPhoneAction } from './confirmPhone'
import { copyToClipboard, CopyToClipboardAction } from './copyToClipboard'
import { goBack, GoBackAction } from './goBack'
import { navigate, NavigateAction } from './navigate'
import { refresh, RefreshAction } from './refresh'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { SelectContactsAction } from './selectContacts'
import { showToast, ShowToastAction } from './showToast'

export interface ShowContextMenuAction {
  type: 'showContextMenu'
  menu: ContextMenuItem[]
}

export interface ContextMenuItem {
  title: string
  onClick: ChatiumActions
}

function showContextMenu(menu: ContextMenuItem[]): ShowContextMenuAction {
  return {
    type: 'showContextMenu',
    menu: menu,
  }
}

export { apiCall, goBack, navigate, refresh, resetSearch, showToast, submit, copyToClipboard, showContextMenu }

export type ChatiumAction =
  | ApiCallAction
  | GoBackAction
  | NavigateAction
  | RefreshAction
  | ResetSearchAction
  | ShowToastAction
  | SubmitAction
  | ConfirmPhoneAction
  | ConfirmEmailAction
  | SelectContactsAction
  | CopyToClipboardAction
  | ShowContextMenuAction
export type ChatiumActions = ChatiumAction | ChatiumAction[]
