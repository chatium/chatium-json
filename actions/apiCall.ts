export interface ApiCallAction<P = unknown> {
  type: 'apiCall'
  url: string
  apiParams: P
}

export function apiCall<P>(url: string, apiParams: P): ApiCallAction<P> {
  return {
    type: 'apiCall',
    url,
    apiParams,
  }
}
