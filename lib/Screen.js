"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen = void 0;
const children_1 = require("./utils/children");
/**
 * Chatium-json screen constructor.
 * Supports Promises and arrays recursive flattening of the given children
 *  and special handling of search block
 */
async function Screen(props, ...children) {
    const flatBlocks = await children_1.flattenChildren(children);
    // extract search and footer blocks
    let header;
    let search;
    let footer;
    const blocks = [];
    for (const b of flatBlocks) {
        if (isHeaderBlock(b)) {
            header = b;
        }
        else if (isSearchBlock(b)) {
            search = b;
        }
        else if (isFooterBlock(b)) {
            footer = b;
        }
        else {
            blocks.push(b);
        }
    }
    return {
        ...props,
        backUrl: await props.backUrl,
        headerButton: await props.headerButton,
        pinnedBlocks: await props.pinnedBlocks,
        blocks,
        footer,
        header: header || props.header,
        search,
    };
}
exports.Screen = Screen;
const isSearchBlock = (b) => b.type === 'search';
const isHeaderBlock = (b) => b.type === 'header';
const isFooterBlock = (b) => b.type === 'footer';
