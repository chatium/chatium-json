"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachMedia = exports.MediaType = void 0;
var MediaType;
(function (MediaType) {
    MediaType["Any"] = "any";
    MediaType["Photo"] = "photo";
    MediaType["Video"] = "video";
    MediaType["None"] = "none";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
function attachMedia(props) {
    return {
        ...props,
        type: 'attachMedia',
    };
}
exports.attachMedia = attachMedia;
