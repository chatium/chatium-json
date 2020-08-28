export declare type RequestPaymentIntegration = 'cloudpayments' | 'yandexkassa' | 'qiwip2p';
export interface RequestPaymentAction {
    type: 'requestPayment';
    token: string;
    amount: number;
    description: string;
    integration: RequestPaymentIntegration;
    payload: object;
}
export declare function requestPayment(token: string, amount: number, description: string, integration: RequestPaymentIntegration, payload: object): Promise<RequestPaymentAction>;
export declare function humanizePaymentIntegration(integration: RequestPaymentIntegration): string;
