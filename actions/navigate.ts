export interface NavigateAction {
  type: 'navigate'
  url: string
  replace?: boolean
  openInExternalApp?: boolean
}

export function navigate(url: string, replace = false): NavigateAction {
  return {
    type: 'navigate',
    url,
    replace,
  }
}
