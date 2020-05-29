import { get } from 'config'

import { AccountCtx } from 'core/account'
import { EnvCtx } from 'core/env/EnvCtx'
import { PaymentIntegration } from 'modules/payment/Payment'

import { ApiCallAction } from './apiCall'
import { navigate, NavigateAction } from './navigate'

export interface RequestPaymentAction {
  type: 'requestPayment'
  token: string
  amount: number
  description: string
  integration: PaymentIntegration
  payload: object
}

export function requestPayment(
  ctx: EnvCtx & AccountCtx,
  token: string,
  amount: number,
  description: string,
  integration: PaymentIntegration,
  payload: object = {},
): RequestPaymentAction | ApiCallAction | NavigateAction {
  if (!ctx.env.web) {
    if (integration === PaymentIntegration.CloudPayments) {
      const params = [
        `publicid=${encodeURIComponent(get<string>('payments.cloudpayment.publicId'))}`,
        `description=${encodeURIComponent(description)}`,
        `amount=${encodeURIComponent(amount)}`,
        `token=${encodeURIComponent(token)}`,
      ]
      return navigate(`https://chatium.com/pay/cloudpayment.html?${params.join('&')}`, {
        openInBrowser: true,
      })
    } else {
      return {
        type: 'apiCall',
        url: ctx.account.url('/payment/request'),
        apiParams: {
          token,
          amount,
          description,
          integration,
          payload,
        },
      }
    }
  } else {
    return {
      type: 'requestPayment',
      token,
      amount,
      description,
      integration,
      payload,
    }
  }
}
