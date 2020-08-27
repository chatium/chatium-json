export enum MediaType {
  Any = 'any',
  Photo = 'photo',
  Video = 'video',
  None = 'none',
}

export interface AttachMediaAction {
  type: 'attachMedia'
  menuTitle: string
  progressTitle: string
  multiple: boolean
  mediaType?: MediaType
  filePutUrl: string
  submitUrl: string
  file?: { type: string }
}

export function attachMedia(
  filePutUrl: string,
  props: Omit<AttachMediaAction, 'type' | 'filePutUrl'>,
): AttachMediaAction {
  return {
    type: 'attachMedia',
    filePutUrl,
    ...props,
  }
}
