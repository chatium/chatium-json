export interface NavigateAction {
    type: 'navigate';
    url: string;
    replace?: boolean;
    openInExternalApp?: boolean;
    openInModalScreen?: boolean;
    fullScreenModal?: boolean;
    openInCurrentScreen?: boolean;
    openInBrowser?: boolean;
    resetStack?: true;
}
export declare function navigate(url: string, options?: Omit<NavigateAction, 'type' | 'url'>): NavigateAction;
