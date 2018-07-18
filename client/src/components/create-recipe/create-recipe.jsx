import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

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
    const raw_user = localStorage.getItem("user")
    const user = JSON.parse(raw_user)

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
                            category: this.state.category
                          }
                        }
                      })
                    } catch (error) {}
                  }}
                >
                  <input
                    type="textarea"
                    placeholder="name"
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                  <input
                    type="textarea"
                    placeholder="description"
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                  <input
                    type="textarea"
                    placeholder="price"
                    onChange={e => this.setState({ price: e.target.value })}
                  />
                  <input
                    type="textarea"
                    placeholder="process"
                    onChange={e => this.setState({ process: e.target.value })}
                  />
                  <input
                    type="textarea"
                    placeholder="nutrition"
                    onChange={e => this.setState({ nutrition: e.target.value })}
                  />
                  <input
                    type="textarea"
                    placeholder="category"
                    onChange={e => this.setState({ category: e.target.value })}
                  />

                  <button type="submit">Submit</button>
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
