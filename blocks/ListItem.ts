import { Color, CommonBlockProps, Icon, ImageSize } from './commonTypes'
import { ChatiumActions } from '../actions'

export interface ListItemBlock extends CommonBlockProps {
  type: 'screen'
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
  upTitle?: string
  upTitleColor?: Color
  url?: string
}

export type ListItemProps = Omit<ListItemBlock, 'type'>

export function ListItem(props: ListItemProps): ListItemBlock {
  return {
    type: 'screen',
    ...props,
  }
}
