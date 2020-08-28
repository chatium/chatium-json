"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.HorizontalCards = void 0;
function HorizontalCards(props) {
    return {
        type: 'horizontalCards',
        ...props,
    };
}
exports.HorizontalCards = HorizontalCards;
function Card(props) {
    return props;
}
exports.Card = Card;
