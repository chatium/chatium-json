import { apiCall, ApiCallAction } from './apiCall'
import { attachMedia, AttachMediaAction } from './attachMedia'
import { ConfirmEmailAction } from './confirmEmail'
import { ConfirmPhoneAction } from './confirmPhone'
import { copyToClipboard, CopyToClipboardAction } from './copyToClipboard'
import { EmptyAction, emptyAction } from './emptyAction'
import { feedMessage, FeedMessageAction } from './feedMessage'
import { goBack, GoBackAction } from './goBack'
import { navigate, NavigateAction } from './navigate'
import { nextSlide, NextSlideAction } from './nextSlide'
import { preloadMedia, PreloadMediaAction } from './preloadMedia'
import { refresh, RefreshAction } from './refresh'
import { requestPayment, RequestPaymentAction } from './requestPayment'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { SelectContactsAction } from './selectContacts'
import { showContextMenu, ShowContextMenuAction } from './showContextMenu'
import { ShowDialogAction, showTextDialog } from './showDialog'
import { showToast, ShowToastAction } from './showToast'
import { submit, SubmitAction } from './submit'
import { UpdateCurrentScreenBlock, updateCurrentScreenBlock } from './updateCurrentScreenBlock'

export {
  apiCall,
  attachMedia,
  copyToClipboard,
  emptyAction,
  feedMessage,
  goBack,
  navigate,
  nextSlide,
  preloadMedia,
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
  | EmptyAction
  | FeedMessageAction
  | GoBackAction
  | NavigateAction
  | NextSlideAction
  | PreloadMediaAction
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
