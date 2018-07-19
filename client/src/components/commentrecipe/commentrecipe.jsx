import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"

const COMMENT_RECIPE = gql`
  mutation commentRecipe($text: String!, $name: String!) {
    commentRecipe(text: $text, name: $name) {
      name
      description
      comments {
        text
      }
    }
  }
`

class CommentForm extends React.Component {
  state = {
    text: "",
    name: ""
  }
  render() {
    let input
    const username = localStorage.getItem("username")

    return (
      <div>
        <Mutation mutation={COMMENT_RECIPE}>
          {(commentRecipe, { data }) => {
            return (
              <div>
                <form
                  className="comment-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    try {
                      const { data } = await commentRecipe({
                        variables: {
                          text: this.state.text,
                          name: this.state.name
                        }
                      })
                    } catch (error) {}
                  }}
                >
                  <input
                    type="textarea"
                    placeholder="comment"
                    onChange={e => this.setState({ text: e.target.value })}
                  />
                  <input
                    type="textarea"
                    placeholder="name"
                    onChange={e => this.setState({ name: e.target.value })}
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

export default CommentForm
