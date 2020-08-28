"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
function Search(props) {
    return {
        type: 'search',
        bgColor: '#ffffff',
        borderColor: '#9a9a9a',
        delayMs: 500,
        fontColor: '#000000',
        minLength: 3,
        placeholderTextColor: '#9a9a9a',
        spinnerColor: '#9a9a9a',
        ...props,
    };
}
exports.Search = Search;
