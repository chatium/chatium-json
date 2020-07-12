export interface NextSlideAction {
  type: 'gallery:nextSlide'
  galleryId: string
}

export function nextSlide(galleryId: string): NextSlideAction {
  return {
    type: 'gallery:nextSlide',
    galleryId: galleryId,
  }
}
