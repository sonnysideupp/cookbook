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
    text: ""
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
                          name: this.props.recipename
                        }
                      })
                    } catch (error) {}
                  }}
                >
                  <input
                    className="commentarea"
                    type="textarea"
                    placeholder="write a review"
                    onChange={e => this.setState({ text: e.target.value })}
                  />

                  <button type="submit" className="subbutton">
                    Submit
                  </button>
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
