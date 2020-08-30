import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps, FontSize, Icon } from '../commonTypes'

export interface ButtonProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
  bgColor?: Color
  fontColor?: Color
  fontSize?: FontSize
  icon?: Icon
  iconPosition?: 'left' | 'right'
  onClick?: ChatiumActions<ExtraActions>
  title?: string
  buttonType?: 'primary' | 'transparent' | 'headerRight' | 'headerLeft' | 'warning' | 'warningTransparent' | 'flat'
}

export interface ButtonBlock<ExtraBlocks, ExtraActions> extends ButtonProps<ExtraBlocks, ExtraActions> {
  type: 'button'
}

export function Button<ExtraBlocks, ExtraActions>(
  props: ButtonProps<ExtraBlocks, ExtraActions>,
): ButtonBlock<ExtraBlocks, ExtraActions> {
  return {
    type: 'button',
    ...props,
  }
}
