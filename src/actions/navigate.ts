export interface NavigateAction {
  type: 'navigate'
  url: string
  replace?: boolean
  openInExternalApp?: boolean
  openInModalScreen?: boolean
  fullScreenModal?: boolean
  openInCurrentScreen?: boolean
  openInBrowser?: boolean
  resetStack?: true
  // web-only, force full browser page reload
  reload?: boolean
}

export function navigate(url: string, options?: Omit<NavigateAction, 'type' | 'url'>): NavigateAction {
  return {
    type: 'navigate',
    url,
    ...options,
  }
}
