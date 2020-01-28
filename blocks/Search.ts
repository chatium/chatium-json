import { Color, CommonBlockProps } from './commonTypes'

export interface SearchProps extends CommonBlockProps {
  borderColor?: Color
  delayMs?: number
  inputPlaceholder?: string
  leftIcon?: string
  minLength?: number
  placeholderTextColor?: Color
  queryParamKey: string
  spinnerColor?: Color
}

export interface SearchBlock extends SearchProps {
  type: 'search'
}

type Props = SearchProps

export function Search(props: Props): SearchBlock {
  return {
    type: 'search',
    ...props,
  }
}