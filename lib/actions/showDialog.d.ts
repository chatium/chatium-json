interface ShowDialogCommon {
    type: 'showDialog';
    title?: string;
    description?: string;
    submitUrl: string;
    submitButtonTitle?: string;
    cancelButtonTitle?: string;
}
export interface ShowTextDialogAction extends ShowDialogCommon {
    inputType: 'text' | 'code';
    placeholder?: string;
    multiline?: boolean;
    value?: string;
}
export declare function showTextDialog(options: Omit<ShowTextDialogAction, 'type' | 'inputType'>): ShowTextDialogAction;
export {};
