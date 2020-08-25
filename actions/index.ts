import { apiCall, ApiCallAction } from './apiCall'
import { attachMedia, AttachMediaAction } from './attachMedia'
import { confirmEmail, ConfirmEmailAction } from './confirmEmail'
import { confirmPhone, ConfirmPhoneAction } from './confirmPhone'
import { copyToClipboard, CopyToClipboardAction } from './copyToClipboard'
import { goBack, GoBackAction } from './goBack'
import { navigate, NavigateAction } from './navigate'
import { nextSlide, NextSlideAction } from './nextSlide'
import { noop, NoopAction } from './noop'
import { preloadMedia, PreloadMediaAction } from './preloadMedia'
import { refresh, RefreshAction } from './refresh'
import { requestPayment, RequestPaymentAction } from './requestPayment'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { selectContacts, SelectContactsAction } from './selectContacts'
import { showContextMenu, ShowContextMenuAction } from './showContextMenu'
import { ShowDialogAction, showTextDialog } from './showDialog'
import { showToast, ShowToastAction } from './showToast'
import { UpdateCurrentScreenBlock, updateCurrentScreenBlock } from './updateCurrentScreenBlock'

export {
  apiCall,
  attachMedia,
  confirmEmail,
  confirmPhone,
  copyToClipboard,
  goBack,
  navigate,
  nextSlide,
  noop,
  preloadMedia,
  refresh,
  requestPayment,
  resetSearch,
  selectContacts,
  showContextMenu,
  showTextDialog,
  showToast,
  updateCurrentScreenBlock,
}

export type ChatiumAction =
  | ApiCallAction
  | AttachMediaAction
  | ConfirmPhoneAction
  | ConfirmEmailAction
  | CopyToClipboardAction
  | GoBackAction
  | NavigateAction
  | NextSlideAction
  | NoopAction
  | PreloadMediaAction
  | RefreshAction
  | RequestPaymentAction
  | ResetSearchAction
  | SelectContactsAction
  | ShowContextMenuAction
  | ShowDialogAction
  | ShowToastAction
  | UpdateCurrentScreenBlock

export type ChatiumActions = ChatiumAction | ChatiumAction[]
