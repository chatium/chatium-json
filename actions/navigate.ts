export interface NavigateAction {
  type: 'navigate'
  url: string
  replace?: boolean
  openInExternalApp?: boolean
  openInModalScreen?: boolean
  resetStack?: true
}

export function navigate(url: string, options?: Omit<NavigateAction, 'type' | 'url'>): NavigateAction {
  return {
    type: 'navigate',
    url,
    ...options,
  }
}
