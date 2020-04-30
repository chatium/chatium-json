import { submit, SubmitAction } from 'lib/chatium-json/actions/submit'

import { apiCall, ApiCallAction } from './apiCall'
import { ConfirmEmailAction } from './confirmEmail'
import { ConfirmPhoneAction } from './confirmPhone'
import { copyToClipboard,CopyToClipboardAction } from './copyToClipboard'
import { goBack, GoBackAction } from './goBack'
import { navigate, NavigateAction } from './navigate'
import { refresh, RefreshAction } from './refresh'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { SelectContactsAction } from './selectContacts'
import { showToast, ShowToastAction } from './showToast'

export { apiCall, goBack, navigate, refresh, resetSearch, showToast, submit, copyToClipboard }

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
export type ChatiumActions = ChatiumAction | ChatiumAction[]
