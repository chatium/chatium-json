import type { ApiCallAction } from './apiCall'
import type { AttachMediaAction } from './attachMedia'
import type { ConfirmEmailAction } from './confirmEmail'
import type { ConfirmPhoneAction } from './confirmPhone'
import type { CopyToClipboardAction } from './copyToClipboard'
import type { GoBackAction } from './goBack'
import type { NavigateAction } from './navigate'
import type { NextSlideAction } from './nextSlide'
import type { NoopAction } from './noop'
import type { PreloadMediaAction } from './preloadMedia'
import type { RefreshAction } from './refresh'
import type { RequestPaymentAction } from './requestPayment'
import type { ResetSearchAction } from './resetSearch'
import type { SelectContactsAction } from './selectContacts'
import type { ShowContextMenuAction } from './showContextMenu'
import type { ShowTextDialogAction } from './showDialog'
import type { ShowToastAction } from './showToast'
import type { UpdateCurrentScreenBlock } from './updateCurrentScreenBlock'

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
  | ShowTextDialogAction
  | ShowToastAction
  | UpdateCurrentScreenBlock

export type ChatiumActions = ChatiumAction | ChatiumAction[]