import { Context, getUserId } from "../../utils"
import { createWriteStream } from "fs"

const storeUpload = async ({ stream, filename }): Promise<any> => {
  // const path = `images/${shortid.generate()}`
  const path = `images/test`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ path }))
      .on("error", reject)
  )
}

const processUpload = async upload => {
  const { stream, filename, mimetype, encoding } = await upload
  const { path } = await storeUpload({ stream, filename })
  return path
}

export const recipe = {
  createrecipe: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    //  const pictureUrl = await processUpload(args.picture)
    return await ctx.db.mutation.createRecipe(
      {
        data: {
          ...args.data,
          creator: {
            connect: {
              id: id
            }
          }
        }
      },
      info
    )
  }
}
