import { CommonBlockProps, InputType } from './commonTypes'

//это ведь в целом поле формы получается? а как можно его добавить на экран?
//или это инпут только для всплывашек типа 'поменять ссылку'?
export interface FieldBlock extends CommonBlockProps {
  type: 'field'
  input: InputType
  isContainer?: boolean
  inputProps?: object
  value?: any
  name?: string
  label: string
  part?: string
  help?: string
}

export type FieldProps = Omit<FieldBlock, 'type'>

export function Field(props: FieldProps): FieldBlock {
  return {
    type: 'field',
    ...props,
  }
}

export interface ConfigProps {
  title?: string
  fields: Array<FieldProps>
  horizontal?: boolean
  default?: object
}
