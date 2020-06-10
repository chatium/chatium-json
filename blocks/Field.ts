//Не пробовал пока пользоваться этим полем, но видимо оно как раз предназначено для того чтобы делать формы в конечном итоге?
//из того что есть уже в react native очень нужен еще вот такой контрол: https://reactnative.dev/docs/switch или его аналог
//ну и для закрытия темы с формами какой-то аналог select (любой контрол с выбором одной опции из нескольких)
//также для редактора в целом необходим какой-то специфический контрол с выбором цвета - кажется ты упоминал что над ним уже работаете?
import { CommonBlockProps, InputType } from './commonTypes'

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
