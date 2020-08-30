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
export interface HorizontalCardsProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
    size: 'small' | 'medium' | 'large';
    shape: 'circle' | 'square' | 'rectangleHorizontal' | 'rectangleVertical';
    textPosition: 'none' | 'insideBottom' | 'outsideBottom';
    initialCardId?: string;
    cards: Array<CardProps<ExtraActions>>;
}
export interface HorizontalCardsBlock<ExtraBlocks, ExtraActions> extends HorizontalCardsProps<ExtraBlocks, ExtraActions> {
    type: 'horizontalCards';
}
export declare function HorizontalCards<ExtraBlocks, ExtraActions>(props: HorizontalCardsProps<ExtraBlocks, ExtraActions>): HorizontalCardsBlock<ExtraBlocks, ExtraActions>;
export declare function Card<ExtraActions>(props: CardProps<ExtraActions>): CardProps<ExtraActions>;
