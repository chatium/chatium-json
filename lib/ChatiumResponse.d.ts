import { ChatiumActions } from './actions';
import { ChatiumScreen } from './Screen';
/**
 * Union of all kinds of responses supported by the chatium router
 */
export declare type ChatiumResponse<ExtraBlocks, ExtraActions> = ApiCallResponse<ExtraBlocks, ExtraActions> | ScreenResponse<ExtraBlocks, ExtraActions> | CustomResponse;
/**
 * Standard response for apiCall client action
 */
export declare type ApiCallResponse<ExtraBlocks, ExtraActions> = ApiCallSuccessResponse<ExtraBlocks, ExtraActions> | ApiCallErrorResponse<ExtraBlocks, ExtraActions>;
export interface ApiCallErrorResponse<ExtraBlocks, ExtraActions> extends ChatiumErrorResponse, ApiCallResponseFields<ExtraBlocks, ExtraActions> {
}
export interface ApiCallSuccessResponse<ExtraBlocks, ExtraActions> extends ApiCallResponseFields<ExtraBlocks, ExtraActions> {
    success: true;
}
export interface ApiCallResponseFields<ExtraBlocks, ExtraActions> {
    appAction?: ChatiumActions<ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>>;
}
/**
 * Standard get-screen response
 */
export declare type ScreenResponse<ExtraBlocks, ExtraActions> = ScreenSuccessResponse<ExtraBlocks, ExtraActions> | ScreenErrorResponse<ExtraBlocks, ExtraActions>;
export interface ScreenSuccessResponse<ExtraBlocks, ExtraActions> extends ScreenResponseFields<ExtraBlocks, ExtraActions> {
    success: true;
}
export interface ScreenErrorResponse<ExtraBlocks, ExtraActions> extends ChatiumErrorResponse, Partial<ScreenResponseFields<ExtraBlocks, ExtraActions>> {
}
export interface ScreenResponseFields<ExtraBlocks, ExtraActions> {
    data: ChatiumScreen<ExtraBlocks, ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>>;
    preloadMedia?: string[];
}
/**
 * Untyped direct data response
 */
export declare type CustomResponse = CustomSuccessResponse | CustomErrorResponse;
export declare type CustomSuccessResponse = unknown | TuneHttpHeadersResponse;
export declare type CustomErrorResponse = ChatiumErrorResponse;
/**
 * Special format recognized by the router to allow tuning of headers and status code
 */
export interface TuneHttpHeadersResponse {
    rawHttpBody: unknown;
    headers?: Record<string, string>;
    statusCode?: number;
}
export declare function isTuneHttpHeadersResponse(resp: any): resp is TuneHttpHeadersResponse;
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
export declare function isChatiumErrorResponse(val: any): val is ChatiumErrorResponse;
export declare function screenResponse<ExtraBlocks, ExtraActions>(props: ScreenResponseFields<ExtraBlocks, ExtraActions>): {
    data: ChatiumScreen<ExtraBlocks, ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>> | undefined;
    preloadMedia?: string[] | undefined;
    success: boolean;
};
export declare function apiCallResponse<ExtraBlocks, ExtraActions>(props: ApiCallResponseFields<ExtraBlocks, ExtraActions>): {
    appAction?: import(".").AttachMediaAction | import(".").ConfirmEmailAction | import(".").ConfirmPhoneAction | import(".").CopyToClipboardAction | import(".").GoBackAction | import(".").NavigateAction | import(".").NextSlideAction | import(".").NoopAction | import(".").PreloadMediaAction | import(".").RefreshAction | import(".").ResetSearchAction | import(".").SelectContactsAction | import(".").ApiCallAction<unknown> | import("./actions/showDialog").ShowDateDialogAction | import("./actions/showDialog").ShowDateAndTimeDialogAction | import("./actions/showDialog").ShowTimeDialogAction | import(".").ShowTextDialogAction | import(".").ShowToastAction | import(".").UpdateCurrentScreenBlock<unknown> | ExtraActions | import(".").ShowContextMenuAction<ExtraActions> | import("./actions").ChatiumAction<ExtraActions>[] | undefined;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>> | undefined;
    success: boolean;
};
