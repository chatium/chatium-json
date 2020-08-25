export interface ApiCallAction<P = unknown> extends ApiCallOptions {
  type: 'apiCall'
  url: string
  apiParams: P
}

export interface ApiCallOptions {
  confirm?: string
  sendPlayerState?: {
    playerId: string
    apiParamsKey: string
  }
}

export function apiCall<P>(url: string, apiParams: P, options?: ApiCallOptions): ApiCallAction<P> {
  return {
    type: 'apiCall',
    url,
    apiParams,
    ...options,
  }
}
