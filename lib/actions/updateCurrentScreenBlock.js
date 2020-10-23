"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCurrentScreenBlock = void 0;
function updateCurrentScreenBlock(blockId, update, merge) {
    return {
        type: 'updateCurrentScreenBlock',
        blockId,
        merge,
        update,
    };
}
exports.updateCurrentScreenBlock = updateCurrentScreenBlock;
