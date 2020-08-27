export interface CopyToClipboardAction {
  type: 'copyToClipboard'
  value: string
}

export function copyToClipboard(value: string): CopyToClipboardAction {
  return {
    type: 'copyToClipboard',
    value,
  }
}
