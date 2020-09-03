import { ChatiumActions } from './actions';
import { ChatiumScreen } from './Screen';
/**
 * Standard response type for standard chatium calls including screen, apiCall action and simple data requests
 */
export declare type ChatiumResponse<ExtraBlocks, ExtraActions> = ChatiumSuccessResponse<ExtraBlocks, ExtraActions> | ErrorResponse<ExtraBlocks, ExtraActions>;
declare type ChatiumSuccessResponse<ExtraBlocks, ExtraActions> = {
    success: true;
} & (ScreenResponse<ExtraBlocks, ExtraActions> | ApiCallResponse<ExtraBlocks, ExtraActions> | DataResponse);
declare type ErrorResponse<ExtraBlocks, ExtraActions> = ScreenErrorResponse<ExtraBlocks, ExtraActions> | ApiCallErrorResponse<ExtraBlocks, ExtraActions> | DataErrorResponse;
/**
 * Standard response for apiCall client action
 */
export interface ApiCallResponse<ExtraBlocks, ExtraActions> {
    appAction?: ChatiumActions<ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>>;
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
export interface ScreenResponse<ExtraBlocks, ExtraActions> {
    data: ChatiumScreen<ExtraBlocks, ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>>;
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
export interface ScreenErrorResponse<ExtraBlocks, ExtraActions> extends ChatiumErrorResponse, Partial<ScreenResponse<ExtraBlocks, ExtraActions>> {
}
export interface ApiCallErrorResponse<ExtraBlocks, ExtraActions> extends ChatiumErrorResponse, ApiCallResponse<ExtraBlocks, ExtraActions> {
}
export interface DataErrorResponse extends ChatiumErrorResponse, Partial<DataResponse> {
}
export declare function isChatiumErrorResponse(val: any): val is ChatiumErrorResponse;
export declare function screenResponse<ExtraBlocks, ExtraActions>(props: ScreenResponse<ExtraBlocks, ExtraActions>): {
    data: ChatiumScreen<ExtraBlocks, ExtraActions>;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>> | undefined;
    preloadMedia?: string[] | undefined;
    success: boolean;
};
export declare function apiCallResponse<ExtraBlocks, ExtraActions>(props: ApiCallResponse<ExtraBlocks, ExtraActions>): {
    appAction?: import(".").AttachMediaAction | import(".").ConfirmEmailAction | import(".").ConfirmPhoneAction | import(".").CopyToClipboardAction | import(".").GoBackAction | import(".").NavigateAction | import(".").NextSlideAction | import(".").NoopAction | import(".").PreloadMediaAction | import(".").RefreshAction | import(".").RequestPaymentAction | import(".").ResetSearchAction | import(".").SelectContactsAction | import(".").ApiCallAction<unknown> | import(".").ShowTextDialogAction | import(".").ShowToastAction | import(".").UpdateCurrentScreenBlock<unknown> | ExtraActions | import(".").ShowContextMenuAction<ExtraActions> | import("./actions").ChatiumAction<ExtraActions>[] | undefined;
    appScreens?: Record<string, ChatiumScreen<ExtraBlocks, ExtraActions>> | undefined;
    success: boolean;
};
export {};
