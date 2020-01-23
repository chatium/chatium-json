import { ChatiumActions } from '../actions'
import { CommonBlockProps, FontSize, Icon } from './commonTypes'

export interface ButtonBlock extends CommonBlockProps {
  type: 'button'
  fontSize?: FontSize
  icon?: Icon
  iconPosition?: 'left' | 'right'
  onClick?: ChatiumActions
  title?: string
}

export type ButtonProps = Omit<ButtonBlock, 'type'>

export function Button(props: ButtonProps): ButtonBlock {
  return {
    type: 'button',
    ...props,
  }
}
