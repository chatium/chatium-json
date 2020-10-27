export declare enum MediaType {
    Any = "any",
    Photo = "photo",
    Video = "video",
    None = "none"
}
export interface AttachMediaAction {
    type: 'attachMedia';
    menuTitle?: string;
    progressTitle?: string;
    multiple?: boolean;
    mediaType?: MediaType;
    filePutUrl: string;
    submitUrl: string;
    file?: {
        type: MobileFileTypeGroup | MobileFileTypeGroup[];
    };
}
declare type MobileFileTypeGroup = 'allFiles' | 'audio' | 'csv' | 'images' | 'plainText' | 'pdf' | 'video' | 'zip';
export declare function attachMedia(filePutUrl: string, props: Omit<AttachMediaAction, 'type' | 'filePutUrl'>): AttachMediaAction;
export {};
