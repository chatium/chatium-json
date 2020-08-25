import { apiCall, ApiCallAction } from './apiCall'
import { attachMedia, AttachMediaAction } from './attachMedia'
import { confirmEmail, ConfirmEmailAction } from './confirmEmail'
import { confirmPhone, ConfirmPhoneAction } from './confirmPhone'
import { copyToClipboard, CopyToClipboardAction } from './copyToClipboard'
import { EmptyAction, emptyAction } from './emptyAction'
import { goBack, GoBackAction } from './goBack'
import { navigate, NavigateAction } from './navigate'
import { nextSlide, NextSlideAction } from './nextSlide'
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
  emptyAction,
  goBack,
  navigate,
  nextSlide,
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
  | EmptyAction
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
  | UpdateCurrentScreenBlock

export type ChatiumActions = ChatiumAction | ChatiumAction[]
