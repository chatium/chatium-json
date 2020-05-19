import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps, FontSize, Icon } from './commonTypes'

export interface ButtonBlock extends CommonBlockProps {
  type: 'button'
  bgColor?: Color
  fontColor?: Color
  fontSize?: FontSize
  icon?: Icon
  iconPosition?: 'left' | 'right'
  onClick?: ChatiumActions
  title?: string
  buttonType?: 'primary' | 'transparent' | 'headerRight' | 'headerLeft' | 'warning' | 'warningTransparent' | 'flat'
}

export type ButtonProps = Omit<ButtonBlock, 'type'>

export function Button(props: ButtonProps): ButtonBlock {
  return {
    type: 'button',
    ...props,
  }
}

export function StandardButton(props: ButtonProps): ButtonBlock {
  return {
    type: 'button',
    containerStyle: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingBottom: 5,
      paddingRight: 10,
    },
    ...props,
  }
}
