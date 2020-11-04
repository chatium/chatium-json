import type { ChatiumActions } from './index';
export interface ShowContextMenuAction<ExtraActions> {
    type: 'showContextMenu';
    title?: string;
    menu: ContextMenuItem<ExtraActions>[];
}
export interface ContextMenuItem<ExtraActions = {}> {
    title: string;
    onClick: ChatiumActions<ExtraActions>;
}
export declare function showContextMenu<ExtraActions>(menu: ContextMenuItem<ExtraActions>[]): ShowContextMenuAction<ExtraActions>;
