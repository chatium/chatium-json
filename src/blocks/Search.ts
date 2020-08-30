import { Color, CommonBlockProps, Icon } from '../commonTypes'

export interface SearchProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
  bgColor?: Color
  borderColor?: Color
  defaultValue?: string
  delayMs?: number
  fontColor?: Color
  inputPlaceholder?: string
  leftIcon?: Icon
  minLength?: number
  placeholderTextColor?: Color
  queryParamKey: string
  spinnerColor?: Color
}

export interface SearchBlock<ExtraBlocks, ExtraActions> extends SearchProps<ExtraBlocks, ExtraActions> {
  type: 'search'
}

export function Search<ExtraBlocks, ExtraActions>(
  props: SearchProps<ExtraBlocks, ExtraActions>,
): SearchBlock<ExtraBlocks, ExtraActions> {
  return {
    type: 'search',
    bgColor: '#ffffff',
    borderColor: '#9a9a9a',
    delayMs: 500,
    fontColor: '#000000',
    minLength: 3,
    placeholderTextColor: '#9a9a9a',
    spinnerColor: '#9a9a9a',
    ...props,
  }
}
