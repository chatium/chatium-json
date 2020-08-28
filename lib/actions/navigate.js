"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigate = void 0;
function navigate(url, options) {
    return {
        type: 'navigate',
        url,
        ...options,
    };
}
exports.navigate = navigate;
