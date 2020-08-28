"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const children_1 = require("../utils/children");
async function Header(props, ...children) {
    const blocks = children.length ? await children_1.flattenChildren(children) : props.blocks;
    return {
        type: 'header',
        ...props,
        blocks: blocks && blocks.length ? blocks : undefined,
        title: await props.title,
        description: await props.description,
    };
}
exports.Header = Header;
