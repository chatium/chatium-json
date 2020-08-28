"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlText = exports.EmptyTextBlock = exports.Text = void 0;
const children_1 = require("../utils/children");
async function Text(props, ...children) {
    return {
        type: 'text',
        ...props,
        blocks: await children_1.flattenChildren(children),
    };
}
exports.Text = Text;
async function EmptyTextBlock() {
    return {
        type: 'text',
        lineHeight: 1.2,
        text: '',
        containerStyle: {
            paddingLeft: 0,
            paddingBottom: 0,
            paddingTop: 0,
            paddingRight: 0,
            marginBottom: 0,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
        },
    };
}
exports.EmptyTextBlock = EmptyTextBlock;
async function ControlText(props) {
    return {
        type: 'text',
        fontSize: 'small',
        color: '#999999',
        containerStyle: {
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
        },
        ...props,
    };
}
exports.ControlText = ControlText;
