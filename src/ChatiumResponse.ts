import { ChatiumActions } from './actions'
import { ChatiumScreen } from './Screen'

/**
 * Standard response type for standard chatium calls including screen, apiCall action and simple data requests
 */
export type ChatiumResponse<ExtraActions> = ChatiumSuccessResponse<ExtraActions> | ErrorResponse<ExtraActions>

type ChatiumSuccessResponse<ExtraActions> = { success: true } & (
  | ScreenResponse<ExtraActions>
  | ApiCallResponse<ExtraActions>
  | DataResponse
)
type ErrorResponse<ExtraActions> =
  | ScreenErrorResponse<ExtraActions>
  | ApiCallErrorResponse<ExtraActions>
  | DataErrorResponse

/**
 * Standard response for apiCall client action
 */
export interface ApiCallResponse<ExtraActions> {
  appAction?: ChatiumActions<ExtraActions>
  appScreens?: Record<string, ChatiumScreen<ExtraActions>>
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
export interface ScreenResponse<ExtraActions> {
  // screen to display must be in `data` field
  data: ChatiumScreen<ExtraActions>
  // screens to be cached by their url, can be used to quick navigation prediction user behaviour
  appScreens?: Record<string, ChatiumScreen<ExtraActions>>
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

export interface ScreenErrorResponse<ExtraActions>
  extends ChatiumErrorResponse,
    Partial<ScreenResponse<ExtraActions>> {}
export interface ApiCallErrorResponse<ExtraActions> extends ChatiumErrorResponse, ApiCallResponse<ExtraActions> {}
export interface DataErrorResponse extends ChatiumErrorResponse, Partial<DataResponse> {}

export function isChatiumErrorResponse(val: any): val is ChatiumErrorResponse {
  return val && val.success === false && 'statusCode' in val && 'reason' in val
}
