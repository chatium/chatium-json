import type { ChatiumActions } from './index'

export interface ShowContextMenuAction<ExtraActions> {
  type: 'showContextMenu'
  title?: string
  menu: ContextMenuItem<ExtraActions>[]
}

export interface ContextMenuItem<ExtraActions = {}> {
  title: string
  onClick: ChatiumActions<ExtraActions>
}

export type ContextMenuValidArg<ExtraActions = {}> = ContextMenuItem<ExtraActions> | null | undefined | false

export function showContextMenu<ExtraActions>(
  menu: ContextMenuValidArg<ExtraActions>[],
): ShowContextMenuAction<ExtraActions> {
  return {
    type: 'showContextMenu',
    menu: menu.filter(Boolean) as ContextMenuItem<ExtraActions>[],
  }
}
