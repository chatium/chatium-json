import { ChatiumActions } from './actions'
import { ChatiumScreen } from './Screen'

/**
 * Union of all kinds of responses supported by the chatium router
 */
export type ChatiumResponse<ExtraBlocks, ExtraActions> =
  | ApiCallResponse<ExtraBlocks, ExtraActions>
  | ScreenResponse<ExtraBlocks, ExtraActions>
  | CustomResponse

/**
 * Standard response for apiCall client action
 */
export type ApiCallResponse<ExtraBlocks, ExtraActions> =
  | ApiCallSuccessResponse<ExtraBlocks, ExtraActions>
  | ApiCallErrorResponse<ExtraBlocks, ExtraActions>

export interface ApiCallErrorResponse<ExtraBlocks, ExtraActions>
  extends ChatiumErrorResponse,
    ApiCallResponseFields<ExtraBlocks, ExtraActions> {}

export interface ApiCallSuccessResponse<ExtraBlocks, ExtraActions> extends ApiCallResponseFields<ExtraBlocks, ExtraActions> {
  success: true
}

export interface ApiCallResponseFields<ExtraBlocks, ExtraActions> {
  appAction?: ChatiumActions<ExtraActions>
  appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>>
}

/**
 * Standard get-screen response
 */
export type ScreenResponse<ExtraBlocks, ExtraActions> =
  | ScreenSuccessResponse<ExtraBlocks, ExtraActions>
  | ScreenErrorResponse<ExtraBlocks, ExtraActions>

export interface ScreenSuccessResponse<ExtraBlocks, ExtraActions>
  extends ScreenResponseFields<ExtraBlocks, ExtraActions> {
  success: true
}

export interface ScreenErrorResponse<ExtraBlocks, ExtraActions>
  extends ChatiumErrorResponse,
    Partial<ScreenResponseFields<ExtraBlocks, ExtraActions>> {}

export interface ScreenResponseFields<ExtraBlocks, ExtraActions> {
  // screen to display must be in `data` field
  data: ChatiumScreen<ExtraBlocks, ExtraActions>
  // screens to be cached by their url, can be used to quick navigation prediction user behaviour
  appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>>
  preloadMedia?: string[]
}

/**
 * Untyped direct data response
 */
export type CustomResponse = CustomSuccessResponse | CustomErrorResponse

export type CustomSuccessResponse = unknown | TuneHttpHeadersResponse

export type CustomErrorResponse = ChatiumErrorResponse

/**
 * Special format recognized by the router to allow tuning of headers and status code
 */
export interface TuneHttpHeadersResponse {
  rawHttpBody: unknown
  headers?: Record<string, string>
  statusCode?: number
}

export function isTuneHttpHeadersResponse(resp: any): resp is TuneHttpHeadersResponse {
  return !!resp && 'rawHttpBody' in resp
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

export function isChatiumErrorResponse(val: any): val is ChatiumErrorResponse {
  return val && val.success === false && 'statusCode' in val && 'reason' in val
}

export function screenResponse<ExtraBlocks, ExtraActions>(props: ScreenResponseFields<ExtraBlocks, ExtraActions>) {
  return {
    success: true,
    ...props,
  }
}

export function apiCallResponse<ExtraBlocks, ExtraActions>(props: ApiCallResponseFields<ExtraBlocks, ExtraActions>) {
  return {
    success: true,
    ...props,
  }
}
