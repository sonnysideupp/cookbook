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
                      this.props.history.push(`/${this.props.recipename}`)
                    } catch (error) {}
                  }}
                >
                  <input
                    type="textarea"
                    placeholder="comment"
                    onChange={e => this.setState({ text: e.target.value })}
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
