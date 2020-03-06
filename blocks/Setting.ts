import { CommonBlockProps, InputType } from './commonTypes'

export interface SettingBlock extends CommonBlockProps {
  type: 'setting'
  input: InputType
  inputProps?: object
  field?: string
  value?: any
  name?: string
  label: string
}

export type SettingProps = Omit<SettingBlock, 'type'>

export function Setting(props: SettingProps): SettingBlock {
  return {
    type: 'setting',
    ...props,
  }
}
