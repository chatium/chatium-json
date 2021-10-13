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
export declare type ContextMenuValidArg<ExtraActions = {}> = ContextMenuItem<ExtraActions> | null | undefined | false;
export declare function showContextMenu<ExtraActions>(menuOrProps: ContextMenuValidArg<ExtraActions>[] | Omit<ShowContextMenuAction<ExtraActions>, 'type'>): ShowContextMenuAction<ExtraActions>;
