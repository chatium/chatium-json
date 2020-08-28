import { ChatiumActions } from '../actions';
import { Color, CommonBlockProps, Icon, ImageSize, StatusIcon } from '../commonTypes';
export interface ListItemBlock extends CommonBlockProps {
    type: 'screen';
    description?: string;
    image?: string;
    imageSize?: ImageSize;
    logo?: Icon;
    onClick?: ChatiumActions;
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
export declare type ListItemProps = Omit<ListItemBlock, 'type'>;
export declare function ListItem(props: ListItemProps): ListItemBlock;
