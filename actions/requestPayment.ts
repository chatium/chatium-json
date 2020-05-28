import { AccountCtx } from 'core/account'
import { EnvCtx } from 'core/env/EnvCtx'
import { PaymentIntegration } from 'modules/payment/Payment'

import { ApiCallAction } from './apiCall'

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
): RequestPaymentAction | ApiCallAction {
  if (!ctx.env.web) {
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
