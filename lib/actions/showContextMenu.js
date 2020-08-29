"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showContextMenu = void 0;
function showContextMenu(menu) {
    return {
        type: 'showContextMenu',
        menu,
    };
}
exports.showContextMenu = showContextMenu;
