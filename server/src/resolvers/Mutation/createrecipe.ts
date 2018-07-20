import { Context, getUserId } from "../../utils"
import { createWriteStream } from "fs"
const shortid = require("shortid")

// const storeUpload = async ({ stream, filename }): Promise<any> => {
//   const path = `images/${shortid.generate()}`

//   return new Promise((resolve, reject) =>
//     stream
//       .pipe(createWriteStream(path))
//       .on("finish", () => resolve({ path }))
//       .on("error", reject)
//   )
// }

// const processUpload = async upload => {
//   const { stream, filename, mimetype, encoding } = await upload
//   const { path } = await storeUpload({ stream, filename })
//   return path
// }

export const recipe = {
  createrecipe: async (parent, args, ctx: Context, info) => {
    const id = getUserId(ctx)
    // const pictureUrl = await processUpload(args.picture)
    return await ctx.db.mutation.createRecipe(
      {
        ...args,
        // pictureUrl: pictureUrl,
        creator: {
          id: id
        }
      },
      info
    )
  }
}
