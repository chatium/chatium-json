export enum MediaType {
  Any = 'any',
  Photo = 'photo',
  Video = 'video',
  None = 'none',
}

export interface AttachMediaAction {
  type: 'attachMedia'
  // mobile only, title for pop-up with "take photo or select from gallery"
  menuTitle?: string
  progressTitle?: string
  multiple?: boolean
  mediaType?: MediaType
  // endpoint to upload file
  filePutUrl?: string
  // POST-endpoint to dynamically get filePutUrl
  getPutUrl?: string
  submitUrl: string
  file?: {
    type: MobileFileTypeGroup | MobileFileTypeGroup[]
  }
}

// see react-native-document-picker + mobile/src/components/AttachBehaviorProvider.js in mobile project
export type MobileFileTypeGroup = 'allFiles' | 'audio' | 'csv' | 'images' | 'plainText' | 'pdf' | 'video' | 'zip'

export function attachMedia(props: Omit<AttachMediaAction, 'type'>): AttachMediaAction {
  return {
    ...props,
    type: 'attachMedia',
  }
}
