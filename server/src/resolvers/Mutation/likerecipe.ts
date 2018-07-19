import { Context, getUserId } from "../../utils"
export default {
  likerecipe: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    const userRecipeLikes = await ctx.db.query.likes({
      where: {
        recipe: {
          name: args.name
        },
        author: {
          id
        }
      }
    })

    if (userRecipeLikes && userRecipeLikes.length > 0) {
      throw new Error("YOU ALREADY LIKE !!!")
    }

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
