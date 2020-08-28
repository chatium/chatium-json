import { ChatiumActions } from '../actions';
import { CommonBlockProps } from '../commonTypes';
export interface CardProps {
    id?: string;
    text?: string;
    imageUrl?: string;
    onClick?: ChatiumActions;
    onContext?: ChatiumActions;
    borderColor?: string;
    bgColor?: string;
    opacity?: number;
}
export interface HorizontalCardsBlock extends CommonBlockProps {
    type: 'horizontalCards';
    size: 'small' | 'medium' | 'large';
    shape: 'circle' | 'square' | 'rectangleHorizontal' | 'rectangleVertical';
    textPosition: 'none' | 'insideBottom' | 'outsideBottom';
    initialCardId?: string;
    cards: Array<CardProps>;
}
export declare type HorizontalCardsProps = Omit<HorizontalCardsBlock, 'type'>;
export declare function HorizontalCards(props: HorizontalCardsProps): HorizontalCardsBlock;
export declare function Card(props: CardProps): CardProps;
