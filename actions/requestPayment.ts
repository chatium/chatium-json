export type RequestPaymentIntegration = 'cloudpayments' | 'yandexkassa' | 'qiwip2p'

export interface RequestPaymentAction {
  type: 'requestPayment'
  token: string
  amount: number
  description: string
  integration: RequestPaymentIntegration
  payload: object
}

export async function requestPayment(
  token: string,
  amount: number,
  description: string,
  integration: RequestPaymentIntegration,
  payload: object,
): Promise<RequestPaymentAction> {
  return {
    type: 'requestPayment',
    token,
    amount,
    description,
    integration,
    payload,
  }
}

export function humanizePaymentIntegration(integration: RequestPaymentIntegration): string {
  return integration === 'cloudpayments' ? 'CloudPayments' : integration === 'yandexkassa' ? 'Yandex.Kassa' : 'Qiwi P2P'
}
