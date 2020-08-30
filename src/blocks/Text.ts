import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps, FontSize, FontStyle } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { ChatiumBlock } from './index'

export type TextBlock<ExtraBlocks, ExtraActions> = TextProps<ExtraBlocks, ExtraActions> & {
  type: 'text'
  blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[]
}

export type TextStyle = {
  color?: Color
  fontSize?: FontSize
  styles?: FontStyle | FontStyle[]
  isBold?: boolean
  lineHeight?: number
}

export type TextProps<ExtraBlocks, ExtraActions> = {
  onClick?: ChatiumActions<ExtraActions>
} & TextContent<ExtraActions> &
  CommonBlockProps<ExtraBlocks, ExtraActions> &
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

export async function Text<ExtraBlocks, ExtraActions>(
  props: TextProps<ExtraBlocks, ExtraActions>,
  ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]
): Promise<TextBlock<ExtraBlocks, ExtraActions>> {
  return {
    type: 'text',
    ...props,
    blocks: await flattenChildren(children),
  }
}
