"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsx = exports.jsxFactory = void 0;
const IntrinsicElements_1 = require("../IntrinsicElements");
/**
 * Creates a jsx-factory function for the given intrinsic chatium blocks
 */
function jsxFactory(intrinsicBlocks) {
    return function jsx(block, props, ...children) {
        if (typeof block === 'string') {
            if (intrinsicBlocks[block]) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return intrinsicBlocks[block]((props !== null && props !== void 0 ? props : {}), ...children);
            }
            else {
                throw new Error(`JSX error: unknown intrinsic block '${block}'. ` +
                    `List of known intrinsic block types: ${Object.keys(intrinsicBlocks)}'`);
            }
        }
        else {
            return block(props, ...children);
        }
    };
}
exports.jsxFactory = jsxFactory;
/**
 * Custom JSX factory for the chatium-json blocks.
 * In tsconfig.json
 *   "jsx": "react",
 *   "jsxFactory": "jsx",
 *
 * Usage in screen-source:
 *  import { jsx } from '@chatium/json'
 */
exports.jsx = jsxFactory(IntrinsicElements_1.intrinsicBlocks);
