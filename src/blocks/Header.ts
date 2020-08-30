import { ChatiumActions } from '../actions'
import { Icon, WithKey } from '../commonTypes'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { ChatiumBlock } from './index'
import { TextBlock } from './Text'

export interface HeaderProps<ExtraBlocks, ExtraActions> extends WithKey {
  blocks?: ChatiumBlock<ExtraBlocks, ExtraActions>[]
  compact: boolean
  logo?: { icon: Icon; onClick?: ChatiumActions<ExtraActions>; onContext?: ChatiumActions<ExtraActions> }
  title?: TextBlock<ExtraBlocks, ExtraActions>
  description?: TextBlock<ExtraBlocks, ExtraActions>
  bottomGradientColors?: string[]
  topGradientColors?: string[]
  image?: {
    downloadUrl: string
    imageSize: { width: number; height: number }
  }
}

export interface HeaderBlock<ExtraBlocks, ExtraActions> extends HeaderProps<ExtraBlocks, ExtraActions> {
  type: 'header'
}

export type HeaderFnProps<ExtraBlocks, ExtraActions> = Omit<
  HeaderProps<ExtraBlocks, ExtraActions>,
  'title' | 'description'
> & {
  title?: TextBlock<ExtraBlocks, ExtraActions> | Promise<TextBlock<ExtraBlocks, ExtraActions>>
  description?: TextBlock<ExtraBlocks, ExtraActions> | Promise<TextBlock<ExtraBlocks, ExtraActions>>
}

export async function Header<ExtraBlocks, ExtraActions>(
  props: HeaderFnProps<ExtraBlocks, ExtraActions>,
  ...children: ChatiumChildNode<ExtraBlocks, ExtraActions>[]
): Promise<HeaderBlock<ExtraBlocks, ExtraActions>> {
  const blocks = children.length ? await flattenChildren(children) : props.blocks
  return {
    type: 'header',
    ...props,
    blocks: blocks && blocks.length ? blocks : undefined,
    title: await props.title,
    description: await props.description,
  }
}
