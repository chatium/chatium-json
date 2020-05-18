import { Account } from 'core/account'
import { fileServiceUploadEndpoint } from 'core/account/accountUtils'

export type MediaType = 'any' | 'photo' | 'video' | 'none'

interface AttachMedia {
  type: 'attachMedia'
  menuTitle: string
  progressTitle: string
  multiple: boolean
  mediaType?: MediaType
  filePutUrl: string
  hashPutUrl: string
  file?: { type: string }
}

export type AttachMediaAction = AttachMedia

export function attachMedia(
  account: Account,
  props: { multiple: boolean; hashPutUrl: string; menuTitle: string; mediaType?: MediaType; file?: { type: string } },
): AttachMediaAction {
  return {
    type: 'attachMedia',
    progressTitle: 'Загрузка файлов',
    filePutUrl: fileServiceUploadEndpoint(account),
    ...props,
  }
}
