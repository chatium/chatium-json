import { AccountCtx } from 'core/account'
import { EnvCtx } from 'core/env/EnvCtx'
import { ReadHeapCtx } from 'core/heap'
import { LangCtx } from 'core/i18n'
import { OptionalUserCtx, UserRole } from 'core/user'
import { PaymentIntegration } from 'modules/payment/Payment'
import { PaymentMethods } from 'modules/payment/PaymentMethod'

import { ApiCallAction } from './apiCall'
import { showToast } from './index'
import { navigate, NavigateAction } from './navigate'
import { ShowToastAction } from './showToast'

export interface RequestPaymentAction {
  type: 'requestPayment'
  token: string
  amount: number
  description: string
  integration: PaymentIntegration
  payload: object
}

export async function requestPayment(
  ctx: LangCtx & EnvCtx & AccountCtx & ReadHeapCtx & OptionalUserCtx,
  token: string,
  amount: number,
  description: string,
): Promise<RequestPaymentAction | ApiCallAction | NavigateAction | ShowToastAction> {
  const paymentMethods = await PaymentMethods.findAll(ctx)
  const defaultPaymentMethod = paymentMethods.find(paymentMethod => paymentMethod.default === 1)

  if (!defaultPaymentMethod) {
    if (ctx.user?.roles.includes(UserRole.Admin)) {
      return ctx.account.navigate('/account/paymentmethod')
    }
    return showToast(ctx.tt('Не настроена платежная система. Обратитесь к администратору.'))
  }

  if (defaultPaymentMethod.integration === PaymentIntegration.CloudPayments) {
    const params = [
      `publicid=${encodeURIComponent((defaultPaymentMethod.settings as { public: string }).public)}`,
      `description=${encodeURIComponent(description)}`,
      `amount=${encodeURIComponent(amount)}`,
      `token=${encodeURIComponent(token)}`,
    ]
    return navigate(`https://chatium.com/pay/cloudpayment.html?${params.join('&')}`, {
      openInBrowser: true,
    })
  } else if (
    defaultPaymentMethod.integration === PaymentIntegration.YandexKassa ||
    defaultPaymentMethod.integration === PaymentIntegration.QiwiP2P
  ) {
    return {
      type: 'apiCall',
      url: ctx.account.url('/payment/request'),
      apiParams: {
        token,
        amount,
        description,
        integration: defaultPaymentMethod.integration,
        paymentMethod: defaultPaymentMethod.id,
      },
    }
  }

  return showToast(ctx.tt('Неизвестная платежная система. Обратитесь к администратору.'))
}
