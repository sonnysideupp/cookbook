import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import Select from "react-select"
import makeAnimated from "react-select/lib/animated"
import "./create-recipe.css"
import Navbar from "../navbar/navbar"
import { Mutation, Query } from "react-apollo"

const CREATE_RECIPE = gql`
  mutation createrecipe($data: RecipeCreateInput!, $picture: Upload) {
    createrecipe(data: $data, picture: $picture) {
      name
      description
      price
      ingredients {
        name
      }
      process
      nutrition
      category
    }
  }
`

const GET_LIKED = gql`
  query user {
    recipes {
      name
      description
      price
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
    pictureUrl: "",
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
                      this.props.history.push("/")
                    } catch (error) {}
                  }}
                >
                  <div>
                    <Navbar history={this.props.history} className="navbar" />
                  </div>
                  <h1>New Recipe</h1>
                  <div className="recipe-title">
                    <input
                      id="recipe-title"
                      type="text"
                      placeholder="recipe title"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </div>
                  <div className="description">
                    <input
                      id="description"
                      type="text"
                      placeholder="description"
                      onChange={e =>
                        this.setState({ description: e.target.value })
                      }
                    />
                  </div>
                  <div className="price">
                    <input
                      id="price"
                      type="text"
                      placeholder="price"
                      onChange={e => this.setState({ price: e.target.value })}
                    />
                  </div>
                  <div className="nutrition">
                    <input
                      id="nutrition"
                      type="text"
                      placeholder="nutrition"
                      onChange={e =>
                        this.setState({ nutrition: e.target.value })
                      }
                    />
                  </div>
                  <div className="ingredients">
                    <input
                      id="ingredients"
                      type="text"
                      placeholder="ingredients"
                      onChange={e =>
                        this.setState({ ingredients: e.target.value })
                      }
                    />
                  </div>
                  <div className="category">
                    <input
                      id="category"
                      type="text"
                      placeholder="category"
                      onChange={e =>
                        this.setState({ category: e.target.value })
                      }
                    />
                    {/* <Select
                      id="category"
                      closeMenuOnSelect={false}
                      components={makeAnimated()}
                      isMulti
                      options={[
                        { value: "breakfast", label: "breakfast" },
                        { value: "chinese", label: "chinese" },
                        { value: "dessert", label: "dessert" },
                        { value: "dinner", label: "dinner" },
                        { value: "drinks", label: "drinks" },
                        { value: "easy", label: "easy" },
                        { value: "lunch", label: "lunch" },
                        { value: "meat", label: "meat" },
                        { value: "salad", label: "salad" },
                        { value: "snacks", label: "snacks" },
                        { value: "soup", label: "soup" },
                        { value: "vegetarian", label: "vegetarian" }
                      ]}
                      type="text"
                      placeholder="category"
                      onChange={e => this.setState({ category: e.target })}
                    /> */}
                  </div>
                  <div className="steps">
                    <input
                      id="step"
                      type="text"
                      placeholder="steps"
                      onChange={e => this.setState({ process: e.target.value })}
                      // onChange={e =>
                      //   this.props.text.split("\n").map((item, key) => {
                      //     return (
                      //       <span key={key}>
                      //         {item}
                      //         <br />
                      //       </span>
                      //     )
                      //   })
                      // }
                    />
                  </div>
                  <div className="picture">
                    <input
                      type="file"
                      required
                      onChange={({
                        target: {
                          validity,
                          files: [file]
                        }
                      }) =>
                        validity.valid &&
                        createrecipe({ variables: { picture: file } })
                      }
                    />
                  </div>
                  <div>
                    <button type="submit" className="submitbutton">
                      Submit
                    </button>
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
