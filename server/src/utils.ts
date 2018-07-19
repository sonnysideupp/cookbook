import * as jwt from "jsonwebtoken"
import { Prisma } from "./generated/prisma"

export interface Context {
  db: Prisma
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get("Authorization")
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "")
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string
    }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super("Not authorized")
  }
}

export function getLikeId(name, ctx: Context, info) {
  const id = getUserId(ctx)
  return ctx.db.query.likes(
    { where: { recipe: { name: name }, author: { id: id } } },
    info
  )

  throw new AuthError()
}
