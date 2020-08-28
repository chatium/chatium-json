import type { Author } from './commonTypes';
export interface ChatProps {
    messages_get_url: string;
    messages_add_url?: string;
    messages_edit_url: string;
    messages_delete_url: string;
    messages_changes_url: string;
    messages_react_url: string;
    mark_as_read_url?: string;
    last_read_get_url?: string;
    last_message_id: string | null;
    last_read_message_id: string | null;
    support_paging: boolean;
    files_put_url: string;
    reply_quotes_enabled: boolean;
    current_author: Author | null;
    group_author: Author | null;
    messages_socket_id: string;
    reactions_socket_id: string;
    last_read_at: number | null;
    last_read_socket_id: string;
    typing_socket_data?: {
        id: string;
        name: string;
        uid: string;
    };
    pinned?: {
        message?: ChatMessage;
        update_url?: string;
    };
    render_inverted?: boolean;
    on_context_api_call_url?: string;
}
export interface ChatMessage {
    id: string;
    text: string | null;
    canEdit: boolean;
    bgColor: string | null;
    author: Author;
    isOutgoing: boolean;
    files: Array<ChatiumFileInfo>;
    replyTo: ChatReplyMessage | null;
    createdAt: number;
    updatedAt: number;
    createdAtTimestamp: number;
}
export declare type ChatReplyMessage = Pick<ChatMessage, 'id' | 'text' | 'files' | 'author'>;
export interface ChatiumFileInfo {
    url: string;
    hash: string;
    mime_type: string;
    thumbnail_url_400?: string;
    thumbnail_url_50?: string;
    meta?: {
        mime?: string;
        size?: number;
        width?: number;
        height?: number;
    };
}
