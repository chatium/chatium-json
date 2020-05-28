import { Account } from 'core/account'
import { fileServiceUniversalUploadEndpoint } from 'core/utils/fileService'

export enum MediaType {
  Any = 'any',
  Photo = 'photo',
  Video = 'video',
  None = 'none',
}

interface AttachMedia {
  type: 'attachMedia'
  menuTitle: string
  progressTitle: string
  multiple: boolean
  mediaType?: MediaType
  filePutUrl: string
  submitUrl: string
  file?: { type: string }
}

export type AttachMediaAction = AttachMedia

export function attachMedia(account: Account, props: Omit<AttachMedia, 'type' | 'filePutUrl'>): AttachMediaAction {
  return {
    type: 'attachMedia',
    filePutUrl: fileServiceUniversalUploadEndpoint(account),
    ...props,
  }
}
