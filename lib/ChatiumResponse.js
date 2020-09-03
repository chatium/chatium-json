"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCallResponse = exports.screenResponse = exports.isChatiumErrorResponse = void 0;
function isChatiumErrorResponse(val) {
    return val && val.success === false && 'statusCode' in val && 'reason' in val;
}
exports.isChatiumErrorResponse = isChatiumErrorResponse;
function screenResponse(props) {
    return {
        success: true,
        ...props,
    };
}
exports.screenResponse = screenResponse;
function apiCallResponse(props) {
    return {
        success: true,
        ...props,
    };
}
exports.apiCallResponse = apiCallResponse;
