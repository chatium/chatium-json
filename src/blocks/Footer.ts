import { CommonBlockProps } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { ChatiumBlock } from './index'

export interface FooterProps extends CommonBlockProps {
  blocks?: ChatiumBlock[]
  visibleAlways?: boolean
}

export interface FooterBlock extends FooterProps {
  type: 'footer'
}

export async function Footer(props: FooterProps, ...children: ChatiumChildNode[]): Promise<FooterBlock> {
  return {
    type: 'footer',
    visibleAlways: false,
    ...props,
    blocks: await flattenChildren(children),
  }
}
