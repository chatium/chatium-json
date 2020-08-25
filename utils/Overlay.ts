import { ChatiumBlock } from '../blocks'
import { ContainerStyle } from '../commonTypes'

export interface OverlayProps {
  id?: string
  gradientColors?: string[]
  blocks: ChatiumBlock[]
  containerStyle?: ContainerStyle
}
