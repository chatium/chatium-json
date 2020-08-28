import { ChatiumScreen } from '../Screen';
import { ChatiumChildNode } from './children';
/**
 * Creates a jsx-factory function for the given intrinsic chatium blocks
 */
export declare function jsxFactory<K extends keyof JSX.IntrinsicElements>(intrinsicBlocks: Record<K, BlockFactory<JSX.IntrinsicElements[K]>>): <P>(block: K | BlockFactory<P>, props: JSX.IntrinsicElements[K] | P, ...children: ChatiumChildNode[]) => JsxNode;
/**
 * Custom JSX factory for the chatium-json blocks.
 * In tsconfig.json
 *   "jsx": "react",
 *   "jsxFactory": "jsx",
 *
 * Usage in screen-source:
 *  import { jsx } from '@chatium/json'
 */
export declare const jsx: <P>(block: "search" | "text" | "audio" | "button" | "footer" | "gallery" | "header" | "image" | "screen" | "video" | "f" | "list-item" | "horizontal-cards" | BlockFactory<P>, props: {} | import("../blocks/Audio").AudioProps | import("../blocks/Footer").FooterProps | import("..").GalleryProps | import("../blocks/Header").HeaderProps | import("../blocks/Search").SearchProps | ({
    onClick?: import("..").AttachMediaAction | import("..").ConfirmEmailAction | import("..").ConfirmPhoneAction | import("..").CopyToClipboardAction | import("..").GoBackAction | import("..").NavigateAction | import("..").NextSlideAction | import("..").NoopAction | import("..").PreloadMediaAction | import("..").RefreshAction | import("..").RequestPaymentAction | import("..").ResetSearchAction | import("..").SelectContactsAction | import("..").ShowContextMenuAction | import("..").ApiCallAction<unknown> | import("..").ShowTextDialogAction | import("..").ShowToastAction | import("..").UpdateCurrentScreenBlock<unknown> | import("..").ChatiumAction[] | undefined;
} & {
    text: string;
    tokens?: undefined;
} & import("..").CommonBlockProps & import("../blocks/Text").TextStyle) | ({
    onClick?: import("..").AttachMediaAction | import("..").ConfirmEmailAction | import("..").ConfirmPhoneAction | import("..").CopyToClipboardAction | import("..").GoBackAction | import("..").NavigateAction | import("..").NextSlideAction | import("..").NoopAction | import("..").PreloadMediaAction | import("..").RefreshAction | import("..").RequestPaymentAction | import("..").ResetSearchAction | import("..").SelectContactsAction | import("..").ShowContextMenuAction | import("..").ApiCallAction<unknown> | import("..").ShowTextDialogAction | import("..").ShowToastAction | import("..").UpdateCurrentScreenBlock<unknown> | import("..").ChatiumAction[] | undefined;
} & {
    tokens: import("../blocks/Text").TextToken[];
    text?: undefined;
} & import("..").CommonBlockProps & import("../blocks/Text").TextStyle) | Pick<import("..").ButtonBlock, "title" | "bgColor" | "fontColor" | "fontSize" | "icon" | "iconPosition" | "onClick" | "buttonType" | "containerStyle" | "fallback" | "onContext" | "key" | "id"> | Pick<import("..").HorizontalCardsBlock, "containerStyle" | "fallback" | "onContext" | "key" | "id" | "size" | "shape" | "textPosition" | "initialCardId" | "cards"> | Pick<import("..").ImageBlock, "onClick" | "containerStyle" | "fallback" | "onContext" | "key" | "id" | "image" | "downloadUrl" | "width" | "height" | "resizeMode" | "imageSize"> | Pick<import("..").ListItemBlock, "description" | "url" | "title" | "onClick" | "containerStyle" | "fallback" | "onContext" | "key" | "id" | "image" | "logo" | "imageSize" | "status" | "titleColor" | "updatedAtTimestamp" | "unreadBullet" | "active" | "upTitle" | "upTitleColor"> | Pick<import("..").VideoBlock, "file" | "url" | "containerStyle" | "fallback" | "onContext" | "key" | "id" | "hlsUrl" | "imageUrl" | "mp4Url" | "videoAspectRatio"> | import("../Screen").ScreenProps | P, ...children: ChatiumChildNode[]) => JsxNode;
interface BlockFactory<P = {}> {
    (props: P, ...children: ChatiumChildNode[]): JsxNode;
}
declare type JsxNode = ChatiumChildNode | ChatiumChildNode[] | Promise<ChatiumScreen>;
export {};
