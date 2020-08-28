"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChatiumErrorResponse = void 0;
function isChatiumErrorResponse(val) {
    return val && val.success === false && 'statusCode' in val && 'reason' in val;
}
exports.isChatiumErrorResponse = isChatiumErrorResponse;
