import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, Icon, ImageSize, StatusIcon } from '../commonTypes';
export interface ListItemProps<ExtraActions> extends CommonBlockProps<ExtraActions> {
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
export interface ListItemBlock<ExtraActions> extends ListItemProps<ExtraActions> {
    type: 'screen';
}
export declare function ListItem<ExtraActions>(props: ListItemProps<ExtraActions>): ListItemBlock<ExtraActions>;
