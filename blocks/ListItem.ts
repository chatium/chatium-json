import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps, Icon, ImageSize } from './commonTypes'

export interface ListItemBlock extends CommonBlockProps {
  type: 'screen'
  description?: string
  image?: string
  imageSize?: ImageSize
  logo?: Icon
  onClick?: ChatiumActions
  status?: Icon & {
    isAvailable: boolean
  }
  title: string
  titleColor?: Color
  updatedAtTimestamp?: number
  unreadBullet?: boolean
  active?: boolean
  upTitle?: string
  upTitleColor?: Color
  url?: string
  contextActions?: ContextAction[]
}

export type ListItemProps = Omit<ListItemBlock, 'type'>

export function ListItem(props: ListItemProps): ListItemBlock {
  return {
    type: 'screen',
    ...props,
  }
}

export interface ContextAction {
  name: string
  onClick: ChatiumActions
}
