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

type Props = Omit<ButtonBlock, 'type'>

export function Button(props: Props): ButtonBlock {
  return {
    type: 'button',
    ...props,
  }
}
