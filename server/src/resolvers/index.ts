import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { recipe } from "./Mutation/createrecipe"
import { AuthPayload } from "./AuthPayload"
import commentrecipe from "./Mutation/commentrecipe"
import likerecipe from "./Mutation/likerecipe"
// import unlikerecipe from "./Mutation/unlikerecipe"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...recipe,
    ...commentrecipe,
    ...likerecipe
    // ...unlikerecipe
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
