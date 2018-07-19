import { Context, getUserId } from "../../utils"
export default {
  unlikerecipe: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)

    const [like] = await ctx.db.query.likes(
      { where: { recipe: { name: args.name }, author: { id: id } } },
      info
    )
    if (!like) {
      throw new Error("No Like.")
    }

    return await ctx.db.mutation.deleteLike(
      {
        where: {
          id: like.id
        }
      },
      info
    )
  }
}
