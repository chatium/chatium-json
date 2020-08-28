"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanizePaymentIntegration = exports.requestPayment = void 0;
async function requestPayment(token, amount, description, integration, payload) {
    return {
        type: 'requestPayment',
        token,
        amount,
        description,
        integration,
        payload,
    };
}
exports.requestPayment = requestPayment;
function humanizePaymentIntegration(integration) {
    return integration === 'cloudpayments' ? 'CloudPayments' : integration === 'yandexkassa' ? 'Yandex.Kassa' : 'Qiwi P2P';
}
exports.humanizePaymentIntegration = humanizePaymentIntegration;
