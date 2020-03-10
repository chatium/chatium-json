import { CommonBlockProps, InputType } from './commonTypes'

export interface FieldBlock extends CommonBlockProps {
  type: 'field'
  input: InputType
  inputProps?: object
  field?: string
  value?: any
  name?: string
  label: string
}

export type FieldProps = Omit<FieldBlock, 'type'>

export function Field(props: FieldProps): FieldBlock {
  return {
    type: 'field',
    ...props,
  }
}

export interface ConfigProps {
  fields: Array<FieldBlock>
}
