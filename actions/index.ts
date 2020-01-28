import { navigate, NavigateAction } from './navigate'
import { apiCall, ApiCallAction } from './apiCall'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { showToast, ShowToastAction } from './showToast'

export { navigate, apiCall, resetSearch, showToast }

export type ChatiumAction = NavigateAction | ApiCallAction | ResetSearchAction | ShowToastAction
export type ChatiumActions = ChatiumAction | ChatiumAction[]
