"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTextDialog = void 0;
function showTextDialog(options) {
    return {
        type: 'showDialog',
        inputType: 'text',
        ...options,
    };
}
exports.showTextDialog = showTextDialog;
