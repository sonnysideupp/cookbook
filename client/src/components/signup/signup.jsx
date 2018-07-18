import * as React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import "./signup.css"

const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $username: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
      token
      user {
        id
        username
        name
        email
      }
    }
  }
`

class SignUP extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    username: ""
  }

  render() {
    return (
      <div>
        <Mutation mutation={SIGNUP}>
          {signup => {
            return (
              <div>
                <div>
    <p class="signup-text">SIGN UP to start sharing your recipes today!</p>
      </div>
                <form
                  className="signup-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    try {
                      const { data } = await signup({
                        variables: {
                          email: this.state.email,
                          password: this.state.password,
                          name: this.state.name,
                          username: this.state.username
                        }
                      })
                      localStorage.setItem("token", data.signup.token)
                      localStorage.setItem(
                        "username",
                        data.signup.user.username
                      )
                      this.props.history.push(`/`)
                    } catch (error) {
                      localStorage.removeItem("token")
                      localStorage.removeItem("username")
                    }
                  }}
                >
                  <input
                    placeholder="name"
                    onChange={e => this.setState({ name: e.target.value })}
                  />

                  <input
                    placeholder="username"
                    onChange={e => this.setState({ username: e.target.value })}
                  />

                  <input
                    placeholder="email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />

                  <input
                    placeholder="password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />

                </form>
                <button type="submit" className="SignupButton">
                    Submit
                  </button>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default SignUP
