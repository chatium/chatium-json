export enum FeedMessageActionType {
  Reply = 'chat:replyToMessage',
  Edit = 'chat:editMessage',
}

export interface FeedMessageAction {
  type: FeedMessageActionType
  id: string
}

export function feedMessage(type: FeedMessageActionType, id: string): FeedMessageAction {
  return {
    type,
    id,
  }
}
