import { CommonBlockProps } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { ChatiumBlock } from './index'

export interface FooterProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
  blocks?: ChatiumBlock<ExtraActions>[]
  visibleAlways?: boolean
}

export interface FooterBlock<ExtraActions> extends FooterProps<ExtraActions> {
  type: 'footer'
}

export async function Footer<ExtraActions>(
  props: FooterProps<ExtraActions>,
  ...children: ChatiumChildNode<ExtraActions>[]
): Promise<FooterBlock<ExtraActions>> {
  return {
    type: 'footer',
    visibleAlways: false,
    ...props,
    blocks: await flattenChildren(children),
  }
}
