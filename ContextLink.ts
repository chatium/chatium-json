import { ChatiumActions } from './actions'
import { Icon } from './blocks/commonTypes'

export interface ContextLink {
  title: string
  icon?: Icon
  action: ChatiumActions
}
