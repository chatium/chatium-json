"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextSlide = void 0;
/**
 * Will not work if the gallery block is not given explicit id
 * @param galleryId - `id` property (blockId) of the target gallery block
 */
function nextSlide(galleryId) {
    return {
        type: 'gallery:nextSlide',
        galleryId,
    };
}
exports.nextSlide = nextSlide;
