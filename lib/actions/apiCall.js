"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCall = void 0;
function apiCall(url, apiParams, options) {
    return {
        type: 'apiCall',
        url,
        apiParams,
        ...options,
    };
}
exports.apiCall = apiCall;
