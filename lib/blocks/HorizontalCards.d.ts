import { ChatiumActions } from '../actions';
import { CommonBlockProps } from '../commonTypes';
export interface CardProps<ExtraActions> {
    id?: string;
    text?: string;
    imageUrl?: string;
    onClick?: ChatiumActions<ExtraActions>;
    onContext?: ChatiumActions<ExtraActions>;
    borderColor?: string;
    bgColor?: string;
    opacity?: number;
}
export interface HorizontalCardsProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
    size: 'small' | 'medium' | 'large';
    shape: 'circle' | 'square' | 'rectangleHorizontal' | 'rectangleVertical';
    textPosition: 'none' | 'insideBottom' | 'outsideBottom';
    initialCardId?: string;
    cards: Array<CardProps<ExtraActions>>;
}
export interface HorizontalCardsBlock<ExtraActions> extends HorizontalCardsProps<ExtraActions> {
    type: 'horizontalCards';
}
export declare function HorizontalCards<ExtraActions>(props: HorizontalCardsProps<ExtraActions>): HorizontalCardsBlock<ExtraActions>;
export declare function Card<ExtraActions>(props: CardProps<ExtraActions>): CardProps<ExtraActions>;
