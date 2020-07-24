import { ChatiumActions } from './actions'
import { ChatiumScreen } from './Screen'

/**
 * Standard response type for standard chatium calls including screen, apiCall action and simple data requests
 */
export type ChatiumResponse = ChatiumSuccessResponse | ErrorResponse

type ChatiumSuccessResponse = { success: true } & (ScreenResponse | ApiCallResponse | DataResponse)
type ErrorResponse = ScreenErrorResponse | ApiCallErrorResponse | DataErrorResponse

/**
 * Standard response for apiCall client action
 */
export interface ApiCallResponse {
  appAction?: ChatiumActions
  appScreens?: Record<string, ChatiumScreen>
}

/**
 * Standard plain data response (whole payload should be put in `data` field)
 */
interface DataResponse {
  data: unknown
}

/**
 * Standard get-screen response
 */
export interface ScreenResponse {
  // screen to display must be in `data` field
  data: ChatiumScreen
  // screens to be cached by their url, can be used to quick navigation prediction user behaviour
  appScreens?: Record<string, ChatiumScreen>
  preloadMedia?: string[]
}

/**
 * Standard error shape
 * Can be extended depending on request type, see below
 */
export interface ChatiumErrorResponse extends ChatiumErrorFields {
  success: false
}

export interface ChatiumErrorFields {
  // error class name
  errorType?: string
  // http status code
  statusCode: number
  // usually - error message
  reason: string
  [key: string]: unknown
}

export interface ScreenErrorResponse extends ChatiumErrorResponse, Partial<ScreenResponse> {}
export interface ApiCallErrorResponse extends ChatiumErrorResponse, ApiCallResponse {}
export interface DataErrorResponse extends ChatiumErrorResponse, Partial<DataResponse> {}

export function isChatiumErrorResponse(val: any): val is ChatiumErrorResponse {
  return val && val.success === false && 'statusCode' in val && 'reason' in val
}
