import { AccountCtx } from 'core/account'
import { getUserDisplayName, User } from 'core/user'
import { Author } from 'lib/chatium-json/blocks/commonTypes'

export function transformUserToJson(ctx: AccountCtx, user: User): Author {
  return {
    id: user.id,
    name: getUserDisplayName(user),
    avatar: user.avatar,
    onClick: [ctx.account.navigate(`user/${user.username ? user.username : user.id}`)],
  }
}
