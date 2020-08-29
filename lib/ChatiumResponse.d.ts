import { ChatiumActions } from './actions';
import { ChatiumScreen } from './Screen';
/**
 * Standard response type for standard chatium calls including screen, apiCall action and simple data requests
 */
export declare type ChatiumResponse<ExtraActions> = ChatiumSuccessResponse<ExtraActions> | ErrorResponse<ExtraActions>;
declare type ChatiumSuccessResponse<ExtraActions> = {
    success: true;
} & (ScreenResponse<ExtraActions> | ApiCallResponse<ExtraActions> | DataResponse);
declare type ErrorResponse<ExtraActions> = ScreenErrorResponse<ExtraActions> | ApiCallErrorResponse<ExtraActions> | DataErrorResponse;
/**
 * Standard response for apiCall client action
 */
export interface ApiCallResponse<ExtraActions> {
    appAction?: ChatiumActions<ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraActions>>;
}
/**
 * Standard plain data response (whole payload should be put in `data` field)
 */
interface DataResponse {
    data: unknown;
}
/**
 * Standard get-screen response
 */
export interface ScreenResponse<ExtraActions> {
    data: ChatiumScreen<ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraActions>>;
    preloadMedia?: string[];
}
/**
 * Standard error shape
 * Can be extended depending on request type, see below
 */
export interface ChatiumErrorResponse extends ChatiumErrorFields {
    success: false;
}
export interface ChatiumErrorFields {
    errorType?: string;
    statusCode: number;
    reason: string;
    [key: string]: unknown;
}
export interface ScreenErrorResponse<ExtraActions> extends ChatiumErrorResponse, Partial<ScreenResponse<ExtraActions>> {
}
export interface ApiCallErrorResponse<ExtraActions> extends ChatiumErrorResponse, ApiCallResponse<ExtraActions> {
}
export interface DataErrorResponse extends ChatiumErrorResponse, Partial<DataResponse> {
}
export declare function isChatiumErrorResponse(val: any): val is ChatiumErrorResponse;
export {};
