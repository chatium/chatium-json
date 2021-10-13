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
  menuOrProps: ContextMenuValidArg<ExtraActions>[] | Omit<ShowContextMenuAction<ExtraActions>, 'type'>,
): ShowContextMenuAction<ExtraActions> {
  if (Array.isArray(menuOrProps)) {
    return {
      type: 'showContextMenu',
      menu: menuOrProps.filter(Boolean) as ContextMenuItem<ExtraActions>[],
    }
  } else {
    return {
      type: 'showContextMenu',
      ...menuOrProps,
      menu: menuOrProps.menu.filter(Boolean) as ContextMenuItem<ExtraActions>[],
    }
  }
}
