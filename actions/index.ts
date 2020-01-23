import { apiCall, ApiCallAction } from './apiCall'
import { resetSearch, ResetSearchAction } from './resetSearch'
import { showToast, ShowToastAction } from './showToast'

export { apiCall, resetSearch, showToast }

export type ChatiumAction = ApiCallAction | ResetSearchAction | ShowToastAction
export type ChatiumActions = ChatiumAction | ChatiumAction[]
