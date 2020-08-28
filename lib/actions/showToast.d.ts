export interface ShowToastAction {
    type: 'showToast';
    toast: string;
}
export declare function showToast(toast: string): ShowToastAction;
