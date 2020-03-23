import { ChatiumActions } from '../actions'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { CommonBlockProps } from './commonTypes'
import { ChatiumBlock } from './index'

export type SliderBlock = SliderProps & {
  type: 'slider'
  blocks?: ChatiumBlock[]
}

export type SliderProps = {
  onClick?: ChatiumActions
} & CommonBlockProps

export async function Slider(props: SliderProps, ...children: ChatiumChildNode[]): Promise<SliderBlock> {
  return {
    type: 'slider',
    ...props,
    blocks: await flattenChildren(children),
  }
}
