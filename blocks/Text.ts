import { ChatiumActions } from '../actions'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { Color, CommonBlockProps, FontSize, FontStyle } from './commonTypes'
import { ChatiumBlock } from './index'

export type TextBlock = TextProps & {
  type: 'text'
  blocks?: ChatiumBlock[]
}

export type TextStyle = {
  color?: Color
  fontSize?: FontSize
  styles?: FontStyle[]
  isBold?: boolean
  lineHeight?: number
}

export type TextProps = {
  onClick?: ChatiumActions
} & TextContent &
  CommonBlockProps &
  TextStyle

// if tokens is defined text is ignored, so they shouldn't be defined together
export type TextContent = { text: string; tokens?: never } | { tokens: TextToken[]; text?: never }

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

export async function EmptyTextBlock(): Promise<TextBlock> {
  return {
    type: 'text',
    lineHeight: 1.2,
    text: '',
    containerStyle: {
      paddingLeft: 0,
      paddingBottom: 0,
      paddingTop: 0,
      paddingRight: 0,
      marginBottom: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
    },
  }
}

export async function ControlText(props: TextProps): Promise<TextBlock> {
  return {
    type: 'text',
    fontSize: 'small',
    color: '#999999',
    containerStyle: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
    ...props,
  }
}
