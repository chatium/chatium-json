import { CommonBlockProps, InputType } from './commonTypes'

export interface FieldBlock extends CommonBlockProps {
  type: 'field'
  input: InputType
  inputProps?: object
  value?: any
  name?: string
  label: string
  help?: string
}

export type FieldProps = Omit<FieldBlock, 'type'>

export function Field(props: FieldProps): FieldBlock {
  return {
    type: 'field',
    ...props,
  }
}

export enum BlockFactory {
  Chatium = 'Chatium',
  Svg = 'Svg',
}

export interface ConfigProps {
  horizontal?: boolean
  blocksFactory?: BlockFactory
  fields: Array<FieldBlock>
}
