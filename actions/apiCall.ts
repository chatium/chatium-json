export interface ApiCallAction<P = unknown> {
  type: 'apiCall'
  url: string
  apiParams: P
  confirm?: string
  sendPlayerState?: {
    playerId: string
    apiParamsKey: string
  }
}

export function apiCall<P>(url: string, apiParams: P, confirm?: string): ApiCallAction<P> {
  return {
    type: 'apiCall',
    url,
    apiParams,
    confirm,
  }
}
