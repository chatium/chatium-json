"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = void 0;
const children_1 = require("../utils/children");
async function Gallery(props, ...children) {
    const slides = [];
    for (const child of await children_1.flattenChildren(children)) {
        slides.push({
            blocks: [child],
        });
    }
    return {
        type: 'gallery',
        ...props,
        slides,
    };
}
exports.Gallery = Gallery;
