import { PaymentIntegration } from 'modules/payment/Payment'

export interface RequestPaymentAction {
  type: 'requestPayment'
  token: string
  amount: number
  description: string
  integration: PaymentIntegration
  payload: object
}

export function requestPayment(
  token: string,
  amount: number,
  description: string,
  integration: PaymentIntegration,
  payload: object = {},
): RequestPaymentAction {
  return {
    type: 'requestPayment',
    token,
    amount,
    description,
    integration,
    payload,
  }
}
