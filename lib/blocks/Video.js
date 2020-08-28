"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineVideo = exports.Video = void 0;
function Video(props) {
    return {
        type: 'video',
        ...props,
    };
}
exports.Video = Video;
function InlineVideo(props) {
    if (props.videoSize && props.videoSize && props.videoSize.height > props.videoSize.width) {
        props.resizeMode = 'cover';
    }
    return {
        type: 'inlineVideo',
        ignoreSilentSwitch: 'ignore',
        ...props,
    };
}
exports.InlineVideo = InlineVideo;
