import { AccountCtx } from 'core/account'
import { LangCtx } from 'core/i18n'
import { getUserDisplayName, User } from 'core/user'
import { Author } from 'lib/chatium-json/blocks/commonTypes'

export function transformUserToJson(ctx: AccountCtx & LangCtx, user: User): Author {
  return {
    id: user.id,
    name: getUserDisplayName(ctx, user),
    avatar: user.avatar,
    onClick: [ctx.account.navigate(`user/${user.username ? user.username : user.id}`)],
  }
}
