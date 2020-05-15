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
}

export type ListItemProps = Omit<ListItemBlock, 'type'>

export function ListItem(props: ListItemProps): ListItemBlock {
  // Приложение Артура отображает даты в секундах. На бекенде они передаются в миллисекундах.
  // Тут я нормализую их.
  if (props.updatedAtTimestamp && props.updatedAtTimestamp > 1000000000000) {
    props.updatedAtTimestamp = Math.round(props.updatedAtTimestamp / 1000)
  }

  return {
    type: 'screen',
    ...props,
  }
}
