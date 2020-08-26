import type { ChatiumJsonId } from '../commonTypes'

export interface NextSlideAction {
  type: 'gallery:nextSlide'
  galleryId: string
}

/**
 * Will not work if the gallery block is not given explicit id
 * @param galleryId - `id` property (blockId) of the target gallery block
 */
export function nextSlide(galleryId: ChatiumJsonId): NextSlideAction {
  return {
    type: 'gallery:nextSlide',
    galleryId,
  }
}
