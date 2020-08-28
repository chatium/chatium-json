export interface PreloadMediaAction {
    type: 'preloadMedia';
    media: string[];
}
export declare function preloadMedia(media: string[]): PreloadMediaAction;
