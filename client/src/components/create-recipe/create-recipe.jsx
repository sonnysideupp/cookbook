import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import "./create-recipe.css"

const CREATE_RECIPE = gql`
  mutation createrecipe($data: RecipeCreateInput!) {
    createrecipe(data: $data) {
      name
      description
      price
      process
      nutrition
      category
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
      connect: []
    }
  }
  render() {
    let input
    const username = localStorage.getItem("username")

    return (
      <div>
        <Mutation mutation={CREATE_RECIPE}>
          {(createrecipe, { data }) => {
            return (
              <div>
                <form
                  className="createrecipe-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    try {
                      const { data } = await createrecipe({
                        variables: {
                          data: {
                            name: this.state.name,
                            description: this.state.description,
                            price: this.state.price,
                            process: this.state.process,
                            nutrition: this.state.nutrition,
                            category: this.state.category,
                            creator: {
                              connect: {
                                username: username
                              }
                            }
                          }
                        }
                      })
                    } catch (error) {}
                  }}
                >
                  <h1>YOUR RECIPE</h1>
                  <div className="recipe-title">
                    <input
                      id="recipe-title"
                      type="textarea"
                      placeholder="recipe title"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div className="description">
                    <input
                      id="description"
                      type="textarea"
                      placeholder="description"
                      onChange={e =>
                        this.setState({ description: e.target.value })
                      }
                    />
                  </div>
                  <div className="price">
                    <input
                      id="price"
                      type="textarea"
                      placeholder="price"
                      onChange={e => this.setState({ price: e.target.value })}
                    />
                  </div>
                  <div className="nutrition">
                    <input
                      id="nutrition"
                      type="textarea"
                      placeholder="nutrition"
                      onChange={e =>
                        this.setState({ nutrition: e.target.value })
                      }
                    />
                  </div>
                  <div className="category">
                    <input
                      id="category"
                      type="textarea"
                      placeholder="category"
                      onChange={e =>
                        this.setState({ category: e.target.value })
                      }
                    />
                  </div>
                  <div className="steps">
                    <input
                      id="step"
                      type="text"
                      placeholder="steps"
                      onChange={e => this.setState({ process: e.target.value })}
                    />
                  </div>
                  <div>
                    <button type="submit">Submit</button>
                  </div>
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
