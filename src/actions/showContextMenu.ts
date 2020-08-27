import type { ChatiumActions } from './index'

export interface ShowContextMenuAction {
  type: 'showContextMenu'
  title?: string
  menu: ContextMenuItem[]
}

export interface ContextMenuItem {
  title: string
  onClick: ChatiumActions
}

export function showContextMenu(menu: ContextMenuItem[]): ShowContextMenuAction {
  return {
    type: 'showContextMenu',
    menu: menu,
  }
}
