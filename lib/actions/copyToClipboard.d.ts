export interface CopyToClipboardAction {
    type: 'copyToClipboard';
    value: string;
}
export declare function copyToClipboard(value: string): CopyToClipboardAction;
