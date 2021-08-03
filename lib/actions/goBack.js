"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goBack = void 0;
function goBack(options) {
    return {
        type: 'goBack',
        ...options,
    };
}
exports.goBack = goBack;
