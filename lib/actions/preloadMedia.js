"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadMedia = void 0;
function preloadMedia(media) {
    return {
        type: 'preloadMedia',
        media,
    };
}
exports.preloadMedia = preloadMedia;
