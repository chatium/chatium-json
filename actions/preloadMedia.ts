export interface PreloadMediaAction {
  type: 'preloadMedia'
  media: string[]
}

export function preloadMedia(media: string[]): PreloadMediaAction {
  return {
    type: 'preloadMedia',
    media,
  }
}
