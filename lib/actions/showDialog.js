"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDateTimeDialog = exports.showTextDialog = void 0;
function showTextDialog(options) {
    return {
        type: 'showDialog',
        inputType: 'text',
        ...options,
    };
}
exports.showTextDialog = showTextDialog;
function showDateTimeDialog(options) {
    return {
        type: 'showDialog',
        inputType: 'datetime',
        ...options,
    };
}
exports.showDateTimeDialog = showDateTimeDialog;
