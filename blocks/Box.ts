import { ChatiumActions } from '../actions'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { Color, CommonBlockProps, FontSize, FontStyle } from './commonTypes'
import { ChatiumBlock } from './index'

export type BoxBlock = BoxProps & {
  type: 'box'
  blocks?: ChatiumBlock[]
}

export type BoxProps = {
  color?: Color
  fontSize?: FontSize
  isBold?: boolean
  onClick?: ChatiumActions
} & BoxContent &
  CommonBlockProps

// if tokens is defined box is ignored, so they shouldn't be defined together
export type BoxContent = { box: string; tokens?: never } | { tokens: BoxToken[]; box?: never }

type BoxToken = string | CustomToken
interface CustomToken {
  v: string
  s?: FontStyle[]
  onClick?: ChatiumActions
}

export async function Box(props: BoxProps, ...children: ChatiumChildNode[]): Promise<BoxBlock> {
  return {
    type: 'box',
    ...props,
    blocks: await flattenChildren(children),
  }
}
