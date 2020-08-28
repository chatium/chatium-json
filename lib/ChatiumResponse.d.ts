import { ChatiumActions } from './actions';
import { ChatiumScreen } from './Screen';
/**
 * Standard response type for standard chatium calls including screen, apiCall action and simple data requests
 */
export declare type ChatiumResponse = ChatiumSuccessResponse | ErrorResponse;
declare type ChatiumSuccessResponse = {
    success: true;
} & (ScreenResponse | ApiCallResponse | DataResponse);
declare type ErrorResponse = ScreenErrorResponse | ApiCallErrorResponse | DataErrorResponse;
/**
 * Standard response for apiCall client action
 */
export interface ApiCallResponse {
    appAction?: ChatiumActions;
    appScreens?: Record<string, ChatiumScreen>;
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
export interface ScreenResponse {
    data: ChatiumScreen;
    appScreens?: Record<string, ChatiumScreen>;
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
export interface ScreenErrorResponse extends ChatiumErrorResponse, Partial<ScreenResponse> {
}
export interface ApiCallErrorResponse extends ChatiumErrorResponse, ApiCallResponse {
}
export interface DataErrorResponse extends ChatiumErrorResponse, Partial<DataResponse> {
}
export declare function isChatiumErrorResponse(val: any): val is ChatiumErrorResponse;
export {};
