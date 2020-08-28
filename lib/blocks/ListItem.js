"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
function ListItem(props) {
    // Приложение Артура отображает даты в секундах. На бекенде они передаются в миллисекундах.
    // Тут я нормализую их.
    if (props.updatedAtTimestamp && props.updatedAtTimestamp > 1000000000000) {
        props.updatedAtTimestamp = Math.round(props.updatedAtTimestamp / 1000);
    }
    return {
        type: 'screen',
        ...props,
    };
}
exports.ListItem = ListItem;
