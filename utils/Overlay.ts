import { ChatiumBlock } from '../blocks'
import { ContainerStyle } from '../blocks/commonTypes'

export interface OverlayProps {
  gradientColors?: string[]
  blocks: ChatiumBlock[]
  containerStyle?: ContainerStyle
}
