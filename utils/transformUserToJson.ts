import { getUserDisplayName, User } from 'core/user'
import { Author } from 'lib/chatium-json/blocks/commonTypes'

export function transformUserToJson(user: User): Author {
  return {
    id: user.id,
    url: user.id,
    name: getUserDisplayName(user),
    avatar: user.avatar,
  }
}
