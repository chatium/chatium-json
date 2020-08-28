"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showToast = void 0;
function showToast(toast) {
    return {
        type: 'showToast',
        toast,
    };
}
exports.showToast = showToast;
