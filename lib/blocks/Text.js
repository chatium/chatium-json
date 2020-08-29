"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const children_1 = require("../utils/children");
async function Text(props, ...children) {
    return {
        type: 'text',
        ...props,
        blocks: await children_1.flattenChildren(children),
    };
}
exports.Text = Text;
