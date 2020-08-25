import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { ChatiumBlock } from './index'

export type BoxBlock = BoxProps & {
  type: 'box'
  blocks?: ChatiumBlock[]
}

export type BoxProps = {
  color?: Color
  onClick?: ChatiumActions
} & CommonBlockProps

export async function Box(props: BoxProps, ...children: ChatiumChildNode[]): Promise<BoxBlock> {
  return {
    type: 'box',
    ...props,
    blocks: await flattenChildren(children),
  }
}
