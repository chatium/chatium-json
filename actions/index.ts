import { submit, SubmitAction } from 'lib/chatium-json/actions/submit'

import { apiCall, ApiCallAction } from './apiCall'
import { goBack, GoBackAction } from './goBack'
import { navigate, NavigateAction } from './navigate'
import { refresh, RefreshAction } from './refresh'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { showToast, ShowToastAction } from './showToast'

export { apiCall, goBack, navigate, refresh, resetSearch, showToast, submit }

export type ChatiumAction =
  | ApiCallAction
  | GoBackAction
  | NavigateAction
  | RefreshAction
  | ResetSearchAction
  | ShowToastAction
  | SubmitAction
export type ChatiumActions = ChatiumAction | ChatiumAction[]
