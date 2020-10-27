import { ChatiumActions } from '../actions'
import { Color, CommonBlockProps, Icon, ImageSize, StatusIcon } from '../commonTypes'

export interface ListItemProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
  description?: string
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

export interface ListItemBlock<ExtraBlocks, ExtraActions> extends ListItemProps<ExtraBlocks, ExtraActions> {
  type: 'screen'
}

export function ListItem<ExtraBlocks, ExtraActions>(
  props: ListItemProps<ExtraBlocks, ExtraActions>,
): ListItemBlock<ExtraBlocks, ExtraActions> {
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
