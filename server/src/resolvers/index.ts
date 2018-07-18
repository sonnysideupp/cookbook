import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { recipe } from "./Mutation/createrecipe"
import { AuthPayload } from "./AuthPayload"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...recipe
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
