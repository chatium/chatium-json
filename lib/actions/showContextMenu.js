"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showContextMenu = void 0;
function showContextMenu(menuOrProps) {
    if (Array.isArray(menuOrProps)) {
        return {
            type: 'showContextMenu',
            menu: menuOrProps.filter(Boolean),
        };
    }
    else {
        return {
            type: 'showContextMenu',
            ...menuOrProps,
            menu: menuOrProps.menu.filter(Boolean),
        };
    }
}
exports.showContextMenu = showContextMenu;
