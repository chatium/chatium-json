"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCurrentScreenBlock = void 0;
function updateCurrentScreenBlock(blockId, data, merge) {
    return {
        type: 'updateCurrentScreenBlock',
        blockId,
        merge,
        data,
    };
}
exports.updateCurrentScreenBlock = updateCurrentScreenBlock;
