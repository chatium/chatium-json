import { navigate, NavigateAction } from './navigate'
import { apiCall, ApiCallAction } from './apiCall'
import { goBack, GoBackAction } from './goBack'
import { refresh, RefreshAction } from './refresh'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { showToast, ShowToastAction } from './showToast'

export { apiCall, goBack, navigate, refresh, resetSearch, showToast }

export type ChatiumAction =
  | ApiCallAction
  | GoBackAction
  | NavigateAction
  | RefreshAction
  | ResetSearchAction
  | ShowToastAction
export type ChatiumActions = ChatiumAction | ChatiumAction[]
