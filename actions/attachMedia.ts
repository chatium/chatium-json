import { Account } from 'core/account'

export type MediaType = 'any' | 'image' | 'video' | 'file'

interface AttachMedia {
  type: 'attachMedia'
  menuTitle: string
  progressTitle: string
  multiple: boolean
  mediaType?: MediaType
  filePutUrl: string
  hashPutUrl: string
}

export type AttachMediaAction = AttachMedia

export function attachMedia(
  account: Account,
  props: { multiple: boolean; hashPutUrl: string; menuTitle: string; mediaType?: MediaType },
): AttachMediaAction {
  return {
    type: 'attachMedia',
    progressTitle: 'Загрузка файлов',
    filePutUrl: fileServiceUploadEndpoint(account),
    ...props,
  }
}
