import { ChatiumActions } from '../actions'
import { Icon, WithKey } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { ChatiumBlock } from './index'
import { TextBlock } from './Text'

export interface HeaderProps extends WithKey {
  blocks?: ChatiumBlock[]
  compact: boolean
  logo?: { icon: Icon; onClick?: ChatiumActions; onContext?: ChatiumActions }
  title?: TextBlock
  description?: TextBlock
  bottomGradientColors?: string[]
  topGradientColors?: string[]
  image?: {
    downloadUrl: string
    imageSize: { width: number; height: number }
  }
}

export interface HeaderBlock extends HeaderProps {
  type: 'header'
}

type Props = Omit<HeaderProps, 'title' | 'description'> & {
  title?: TextBlock | Promise<TextBlock>
  description?: TextBlock | Promise<TextBlock>
}

export async function Header(props: Props, ...children: ChatiumChildNode[]): Promise<HeaderBlock> {
  const blocks = children.length ? await flattenChildren(children) : props.blocks
  return {
    type: 'header',
    ...props,
    blocks: blocks && blocks.length ? blocks : undefined,
    title: await props.title,
    description: await props.description,
  }
}
