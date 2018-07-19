import { Context, getUserId } from "../../utils"
export default {
  likerecipe: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    return await ctx.db.mutation.updateRecipe(
      {
        data: {
          likes: {
            create: {
              author: {
                connect: {
                  id: id
                }
              }
            }
          }
        },
        where: {
          name: args.name
        }
      },
      info
    )
  }
}
