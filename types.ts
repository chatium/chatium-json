export interface ChatiumScreen {
  title: string
  blocks: ChatiumBlock[]
  search?: ChatiumInput
}

export interface ChatiumBlock extends CommonBlockProps {
  type: string
  title?: string
  onClick?: ChatiumAction
}

interface ChatiumInput extends CommonBlockProps {
  queryParamKey: string
  inputPlaceholder: string
  minLength: number
  delayMs: number
  leftIcon: null | string
  borderColor?: Color
  placeholderTextColor?: Color
  spinnerColor?: Color
}

interface CommonBlockProps {
  bgColor?: Color
  fontColor?: Color
}

export type ChatiumAction = ApiCallAction | ResetSearchAction | ShowToastAction

type Color = string

interface ApiCallAction<P = unknown> {
  type: "apiCall"
  url: string
  apiParams: P
}

interface ResetSearchAction {
  type: "resetSearch"
}

interface ShowToastAction {
  type: "showToast"
  toast: string
}
