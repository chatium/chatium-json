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
    filePutUrl?: string;
    getPutUrl?: string;
    submitUrl: string;
    file?: {
        type: MobileFileTypeGroup | MobileFileTypeGroup[];
    };
}
export declare type MobileFileTypeGroup = 'allFiles' | 'audio' | 'csv' | 'images' | 'plainText' | 'pdf' | 'video' | 'zip';
export declare function attachMedia(props: Omit<AttachMediaAction, 'type'>): AttachMediaAction;
