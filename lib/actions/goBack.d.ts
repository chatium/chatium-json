export interface GoBackAction {
    type: 'goBack';
    dismissModal?: boolean;
}
export declare function goBack(options: Omit<GoBackAction, 'type'>): GoBackAction;
