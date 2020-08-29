import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps, FontSize, FontStyle } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { ChatiumBlock } from './index'

export type TextBlock<ExtraActions> = TextProps<ExtraActions> & {
  type: 'text'
  blocks?: ChatiumBlock<ExtraActions>[]
}

export type TextStyle = {
  color?: Color
  fontSize?: FontSize
  styles?: FontStyle | FontStyle[]
  isBold?: boolean
  lineHeight?: number
}

export type TextProps<ExtraActions> = {
  onClick?: ChatiumActions<ExtraActions>
} & TextContent<ExtraActions> &
  CommonBlockProps<ExtraActions> &
  TextStyle

// if tokens is defined text is ignored, so they shouldn't be defined together
export type TextContent<ExtraActions> =
  | { text: string; tokens?: never }
  | { tokens: TextToken<ExtraActions>[]; text?: never }

export type TextToken<ExtraActions> = string | CustomToken<ExtraActions>
interface CustomToken<ExtraActions> {
  v: string
  s?: FontStyle[]
  onClick?: ChatiumActions<ExtraActions>
}

export async function Text<ExtraActions>(
  props: TextProps<ExtraActions>,
  ...children: ChatiumChildNode<ExtraActions>[]
): Promise<TextBlock<ExtraActions>> {
  return {
    type: 'text',
    ...props,
    blocks: await flattenChildren(children),
  }
}
