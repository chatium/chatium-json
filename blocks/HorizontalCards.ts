import { ChatiumActions } from '../actions'
import { CommonBlockProps } from './commonTypes'

export interface CardProps {
  id?: string
  text?: string
  imageUrl?: string
  onClick?: ChatiumActions
  onContext?: ChatiumActions
  borderColor?: string
  bgColor?: string
  opacity?: number
}

export interface HorizontalCardsBlock extends CommonBlockProps {
  type: 'horizontalCards'
  size: 'small' | 'medium' | 'large'
  shape: 'circle' | 'square' | 'rectangleHorizontal' | 'rectangleVertical'
  textPosition: 'none' | 'insideBottom' | 'outsideBottom'
  initialCardId?: string
  cards: Array<CardProps>
}

export type HorizontalCardsProps = Omit<HorizontalCardsBlock, 'type'>

export function HorizontalCards(props: HorizontalCardsProps): HorizontalCardsBlock {
  return {
    type: 'horizontalCards',
    ...props,
  }
}

export function Card(props: CardProps) {
  return {
    ...props,
  }
}
