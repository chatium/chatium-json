"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyToClipboard = void 0;
function copyToClipboard(value) {
    return {
        type: 'copyToClipboard',
        value,
    };
}
exports.copyToClipboard = copyToClipboard;
