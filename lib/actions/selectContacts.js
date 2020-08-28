"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectContacts = void 0;
function selectContacts(url) {
    return {
        type: 'selectContacts',
        url,
    };
}
exports.selectContacts = selectContacts;
