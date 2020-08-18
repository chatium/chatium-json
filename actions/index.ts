import { submit, SubmitAction } from 'lib/chatium-json/actions/submit'

import { apiCall, ApiCallAction } from './apiCall'
import { attachMedia, AttachMediaAction } from './attachMedia'
import { ConfirmEmailAction } from './confirmEmail'
import { ConfirmPhoneAction } from './confirmPhone'
import { copyToClipboard, CopyToClipboardAction } from './copyToClipboard'
import { CustomAction, customAction } from './customAction'
import { EmptyAction, emptyAction } from './emptyAction'
import { feedMessage, FeedMessageAction } from './feedMessage'
import { goBack, GoBackAction } from './goBack'
import { navigate, NavigateAction } from './navigate'
import { nextSlide, NextSlideAction } from './nextSlide'
import { refresh, RefreshAction } from './refresh'
import { requestPayment, RequestPaymentAction } from './requestPayment'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { SelectContactsAction } from './selectContacts'
import { ShowDialogAction } from './showDialog'
import { showToast, ShowToastAction } from './showToast'
import { UpdateCurrentScreenBlock,updateCurrentScreenBlock } from './updateCurrentScreenBlock'

export interface ShowContextMenuAction {
  type: 'showContextMenu'
  title?: string
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

export {
  apiCall,
  goBack,
  navigate,
  refresh,
  resetSearch,
  showToast,
  submit,
  copyToClipboard,
  showContextMenu,
  attachMedia,
  feedMessage,
  requestPayment,
  emptyAction,
  nextSlide,
  customAction,
  updateCurrentScreenBlock,
}

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
  | ShowDialogAction
  | AttachMediaAction
  | FeedMessageAction
  | RequestPaymentAction
  | EmptyAction
  | NextSlideAction
  | CustomAction
  | UpdateCurrentScreenBlock

export type ChatiumActions = ChatiumAction | ChatiumAction[]
