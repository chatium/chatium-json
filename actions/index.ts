import { navigate, NavigateAction } from './navigate'
import { apiCall, ApiCallAction } from './apiCall'
import { refresh, RefreshAction } from './refresh'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { showToast, ShowToastAction } from './showToast'

export { apiCall, navigate, refresh, resetSearch, showToast }

export type ChatiumAction = ApiCallAction | NavigateAction | RefreshAction | ResetSearchAction | ShowToastAction
export type ChatiumActions = ChatiumAction | ChatiumAction[]
