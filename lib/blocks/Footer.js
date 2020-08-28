"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const children_1 = require("../utils/children");
async function Footer(props, ...children) {
    return {
        type: 'footer',
        visibleAlways: false,
        ...props,
        blocks: await children_1.flattenChildren(children),
    };
}
exports.Footer = Footer;
