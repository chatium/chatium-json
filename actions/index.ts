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
import { showContextMenu, ShowContextMenuAction } from './showContextMenu'
import { ShowDialogAction,showTextDialog } from './showDialog'
import { showToast, ShowToastAction } from './showToast'
import { submit, SubmitAction } from './submit'
import { UpdateCurrentScreenBlock, updateCurrentScreenBlock } from './updateCurrentScreenBlock'

export {
  apiCall,
  attachMedia,
  copyToClipboard,
  customAction,
  emptyAction,
  feedMessage,
  goBack,
  navigate,
  nextSlide,
  resetSearch,
  refresh,
  requestPayment,
  showContextMenu,
  showTextDialog,
  showToast,
  submit,
  updateCurrentScreenBlock,
}

export type ChatiumAction =
  | ApiCallAction
  | AttachMediaAction
  | ConfirmPhoneAction
  | ConfirmEmailAction
  | CopyToClipboardAction
  | CustomAction
  | EmptyAction
  | FeedMessageAction
  | GoBackAction
  | NavigateAction
  | NextSlideAction
  | RefreshAction
  | RequestPaymentAction
  | ResetSearchAction
  | SelectContactsAction
  | ShowContextMenuAction
  | ShowDialogAction
  | ShowToastAction
  | SubmitAction
  | UpdateCurrentScreenBlock

export type ChatiumActions = ChatiumAction | ChatiumAction[]
