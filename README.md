# prisma-boilerplate

This is a boilerplate for you to get started on your final projects. The boilerplate should be very familiar to you as it is the same one we've used for the twitter app.

## Getting Started

There should not be any changes required in your `/client` folder, however you will need to generate your own prisma endpoint :) 

### Step 1

Go into your /server folder by running `cd server` and then cd into your prisma folder (if you do not have one inside /server, please create it with the `mkdir` command).

### Step 2

Once you are inside your prisma folder, run `prisma init` in your terminal. You will then be presented with a few options such as: 

```
  Set up a new Prisma server for local development (based on docker-compose):
  Use existing database      Connect to existing database
  Create new database        Set up a local database using Docker

  Or deploy to an existing Prisma server:
  entr/entr-prod             Production Prisma cluster
❯ Demo server                Hosted demo environment incl. database (requires login)
  Use other server           Manually provide endpoint of a running Prisma server
```

Using the arrow keys on your keyboard, go ahead and select "Demo server" and pick the lowest latency server (hint: this is Europe in this case).

Finally, give your server a name. You can call it anything you want depending on your app. Last time, we called it "tweeter".

Click enter for the "stage" question and let it default to "dev".

Now in your prisma folder, you should see two new files. `prisma.yml` and `datamodel.yml`.

### Step 3

In your `prisma.yml` folder, append the following at the bottom of the file to what is already there:

```
hooks:
  post-deploy:
    - graphql get-schema -p database
    - graphql prepare
    - graphql codegen
```

That should be it for the server! cd back out into the `server` folder by doing `cd ..` and run `yarn install` (or `npm install`) (remember to stick to one ;)). 

Finally, since we've just created the prisma endpoint let's deploy our prisma server by running `prisma deploy` in our server directory.

Now that the depencies are installed and our prisma server has been deployed, try running your server with `yarn dev` and you should see your playground appear.

Oh no! When running `yarn dev`, you've run into an error. It looks something like this:
```
TSError: ⨯ Unable to compile TypeScript:
src/resolvers/Mutation/auth.ts(19,53): error TS2345: Argument of type '{ where: { email: a
ny; }; }' is not assignable to parameter of type '{ where: UserWhereUniqueInput; }'.
  Types of property 'where' are incompatible.
    Type '{ email: any; }' is not assignable to type 'UserWhereUniqueInput'.
      Object literal may only specify known properties, and 'email' does not exist in type
 'UserWhereUniqueInput'.
```

What's going on here? Let's take a look at the error message.

Well, the boilerplate code we've given you has a file that's referenced in the error message: `src/resolvers/Mutation/auth.ts`. This file contains the resolvers for our `login` and `signup` mutations. Now if we take a look at the code for these resolvers, and specifically the lines referenced in the error message (line 19), we see:
```
const user = await ctx.db.query.user({ where: { email } })
```
So what's wrong with this line? Well, if we look at the `datamodel.yml` file in `/server/prisma` we created earlier with `prisma init`, we see that the file only contains two fields for the `User` type:
```
type User {
  id: ID! @unique
  name: String!  
}
```
We're trying to use the `email` field when it doesn't exist in the datamodel yet, so our code is breaking. To fix this, we need to update our `datamodel.graphql` file. Update the `User` type so it looks like this:
```
type User {
  id: ID! @unique
  name: String!
  email: String! @unique
  password: String!
}
```
Since we've updated our `datamodel.graphql`, we need to run `prisma deploy` again in our `/server` directory. Now we can finally run `yarn dev` again and see our playground appear. 

To know that your server has been deployed correctly, check out the `schema` tab in your playground in both `app` and `dev` and see if that makes sense with your `datamodel.graphql` file! E.G: you should only have a User type right now.


### Step 4

Now that our server is running, in *another* terminal tab, go to your `client` folder. Once there, make sure you install all the depenencies with `yarn install` (or `npm install`). 

Once installed, go ahead and run your client with `yarn start` and make sure that is running. You should only see some text that says HOMEPAGE for now. It will be up to you to implement all the components/routes for your app :) 


### Step 5 (very important)


Now that you will be collaborating, it's important that you deploy your project to github.com and that you add each other as collaborators. Make sure that when you are working on your features, you work in branches so that you can reduce conflicts with your partner's code. 

If you don't recall how git branches work, please ask myself or Austin. Also make sure to check with us to make sure that your project is correctly setup on github and that you have added your team as collaborators. Keep in mind that only one of you has to do this, the project does not need to live on every member's github so I suggest you agree on someone on your team to host the project on their github, and then you all can clone from there and later on fork it so you can have it on your profiles too!

Once you have decided what you are building, and who is focusing on what, you should get started and start shipping features 🚀

Good luck! 