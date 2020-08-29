import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps, Icon, ImageSize, StatusIcon } from '../commonTypes'

export interface ListItemProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
  description?: string
  image?: string
  imageSize?: ImageSize
  logo?: Icon
  onClick?: ChatiumActions<ExtraActions>
  status?: StatusIcon
  title: string
  titleColor?: Color
  updatedAtTimestamp?: number
  unreadBullet?: boolean
  active?: boolean
  upTitle?: string
  upTitleColor?: Color
  url?: string
}

export interface ListItemBlock<ExtraActions> extends ListItemProps<ExtraActions> {
  type: 'screen'
}

export function ListItem<ExtraActions>(props: ListItemProps<ExtraActions>): ListItemBlock<ExtraActions> {
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
