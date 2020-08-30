import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, Icon, ImageSize, StatusIcon } from '../commonTypes';
export interface ListItemProps<ExtraBlocks, ExtraActions> extends CommonBlockProps<ExtraBlocks, ExtraActions> {
    description?: string;
    image?: string;
    imageSize?: ImageSize;
    logo?: Icon;
    onClick?: ChatiumActions<ExtraActions>;
    status?: StatusIcon;
    title: string;
    titleColor?: Color;
    updatedAtTimestamp?: number;
    unreadBullet?: boolean;
    active?: boolean;
    upTitle?: string;
    upTitleColor?: Color;
    url?: string;
}
export interface ListItemBlock<ExtraBlocks, ExtraActions> extends ListItemProps<ExtraBlocks, ExtraActions> {
    type: 'screen';
}
export declare function ListItem<ExtraBlocks, ExtraActions>(props: ListItemProps<ExtraBlocks, ExtraActions>): ListItemBlock<ExtraBlocks, ExtraActions>;
