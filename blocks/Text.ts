import { ChatiumActions } from '../actions'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { Color, CommonBlockProps, FontSize, FontStyle } from './commonTypes'
import { ChatiumBlock } from './index'

export type TextBlock = TextProps & {
  type: 'text'
  blocks?: ChatiumBlock[]
}

export type TextProps = {
  color?: Color
  fontSize?: FontSize
  isBold?: boolean
  onClick?: ChatiumActions
} & TextContent &
  CommonBlockProps

// if tokens is defined text is ignored, so they shouldn't be defined together
type TextContent = { text: string; tokens?: never } | { tokens: TextToken[]; text?: never }

type TextToken = string | CustomToken
interface CustomToken {
  v: string
  s?: FontStyle[]
  onClick?: ChatiumActions
}

export async function Text(props: TextProps, ...children: ChatiumChildNode[]): Promise<TextBlock> {
  return {
    type: 'text',
    ...props,
    blocks: await flattenChildren(children),
  }
}
