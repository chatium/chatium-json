import type { ChatiumActions } from './actions'
import type { Icon } from './commonTypes'

export interface ContextLink {
  title: string
  icon?: Icon
  action: ChatiumActions
}
