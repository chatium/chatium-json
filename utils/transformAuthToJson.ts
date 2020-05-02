import { AccountCtx } from 'core/account'
import { Auth } from 'core/auth'
import { getAuthAvatar, getAuthDisplayName } from 'core/auth/authTypes'
import { User } from 'core/user'

import { Author } from '../blocks/commonTypes'

export function transformAuthToJson(ctx: AccountCtx, auth: Auth, user: User): Author {
  return {
    id: user.id,
    name: getAuthDisplayName(auth),
    avatar: getAuthAvatar(auth),
    onClick: [ctx.account.navigate(`user/${auth.username ? auth.username : user.id}`)],
  }
}
