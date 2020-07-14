import { CommonBlockProps } from './commonTypes'

export interface CustomBlock extends CommonBlockProps {
  type: string
}

export function GetCustomBlock(props: CustomBlock & any): CustomBlock {
  return props
}
