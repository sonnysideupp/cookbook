import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const CREATE_RECIPE = gql`
  mutation createRecipe($data: RecipeCreateInput!) {
    createRecipe (data: $data) {
      name
      description
      price
      process
      likes
      nutrition
      category
      comments
      ingredients {
        connect [
          {name},
        ]
      }
    }
  }
`

class CreateRecipeForm extends React.Component {
    state = {
        name: "",
        description: "",
        price: 0,
        process: "",
        likes: 0,
        nutrition: "",
        category: "", 
        comments: "",
        ingredients: {
          connect: [
            
          ]
        }
    }
  render() {
    let input
    const raw_user = localStorage.getItem("user")
    const user = JSON.parse(raw_user)

    return (
      <div>
        <Mutation mutation={CREATE_RECIPE}>
          {(createRecipe, { data }) => {
            return (
              <div>
                <form
                  onSubmit={async e => {
                    e.preventDefault()
                    await createRecipe({
                      variables: {data: { 
                        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        process: this.state.process,
        likes: this.state.likes,
        nutrition: this.state.nutrition,
        category: this.state.category,
        comments: this.state.category,
        ingredients: {
          connect: [
            
          ]
        }
    }
                      }
                    })
                    this.props.refetchFeedRecipes()
                    input.value = ""
                  }}
                >
                  <input
                    ref={node => {
                      input = node
                    }}
                  />
                  <button type="submit" className="button">Submit!</button>
                </form>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default CreateRecipeForm