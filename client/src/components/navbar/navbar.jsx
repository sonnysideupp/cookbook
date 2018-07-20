import * as React from "react"
import "./navbar.css"
import gql from "graphql-tag"
import { Mutation, Query } from "react-apollo"
import { Link } from "react-router-dom"
import logo from "./cookbooktitlelogo2.png"
import Select from "react-select"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        username
        email
      }
    }
  }
`
const GET_ALL_PROFILES = gql`
  query myRecipesQuery {
    allrecipes {
      id
      name
      # creator {
      #   name
      # }
      description
      price
      likes {
        author {
          name
        }
      }
    }
  }
`

class Navigation extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    selectedOption: "",
    isDropDownOpen: false
  }

  onLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    this.props.history.push("/")
  }

  toggleDropdown = () => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    })
  }

  render() {
    const token = localStorage.getItem("token")
    var uname = ""
    // var uname = () => {
    //   return token ? localStorage.getItem("username") : "guest"
    // }

    if (this.state.loading) {
      return <div className="app__loading">Loading...</div>
    }

    return (
      <div>
        <Navbar className="Navbar" light expand="md">
          <NavbarBrand className="NavbarTitle" href="/">
            <div className="titlelogo">
              <img src={logo} alt="logo" />
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Query query={GET_ALL_PROFILES}>
              {({ loading, error, data, refetch }) => {
                if (loading) {
                  return "Loading..."
                }

                if (error) {
                  return "Oops, something blew up."
                }

                if (!data.allrecipes) return "no data..."

                const options = data.allrecipes.map(recipe => {
                  return {
                    value: recipe.id,
                    label: recipe.name
                  }
                })

                return (
                  <div>
                    <Nav className="ml-auto" navbar>
                      <NavItem className="search__nav">
                        <div className="search__component">
                          <Select
                            name="form-field-name"
                            onChange={this.props.handleRecipeOnChange}
                            options={options}
                          />
                        </div>
                      </NavItem>
                    </Nav>
                  </div>
                )
              }}
            </Query>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  disabled={!localStorage.getItem("token")}
                  className="my-page"
                  href="/my-profile/"
                  id="my-page"
                >
                  My Page
                </NavLink>
              </NavItem>
              <NavItem className="welcome">
                <p className="welcomeText">Welcome, </p>
                <div>
                  {token
                    ? (uname = localStorage.getItem("username"))
                    : (uname = "guest")}
                </div>
              </NavItem>
              <UncontrolledDropdown direction="left" nav inNavbar>
                <div>
                  {token ? (
                    <Button onClick={this.onLogout} color="info">
                      Log out
                    </Button>
                  ) : (
                    <DropdownToggle onClick={this.toggleDropdown} caret>
                      Login
                    </DropdownToggle>
                  )}
                </div>

                <Dropdown isOpen={this.state.isDropDownOpen} inNavbar>
                  <DropdownMenu class="dropdown-toggle">
                    <Mutation mutation={LOGIN}>
                      {login => {
                        return (
                          <div className="MainPart">
                            <form
                              id="myForm"
                              onSubmit={async e => {
                                e.preventDefault()
                                try {
                                  const { data } = await login({
                                    variables: {
                                      email: this.state.email,
                                      password: this.state.password
                                    }
                                  })
                                  localStorage.setItem(
                                    "token",
                                    data.login.token
                                  )
                                  localStorage.setItem(
                                    "username",
                                    data.login.user.username
                                  )
                                  // isOpen: PropTypes.bool,
                                  // DropdownMenu.propTypes.bool = false
                                  this.toggleDropdown()

                                  this.setState({
                                    email: "",
                                    password: "",
                                    error: ""
                                  })

                                  this.props.history.push("/")
                                } catch (error) {
                                  localStorage.removeItem("token")
                                  localStorage.removeItem("username")

                                  this.setState({
                                    email: "",
                                    password: "",
                                    error: "Oops! Something went wrong."
                                  })
                                }
                              }}
                            >
                              <div className="inputBox">
                                <DropdownItem disabled id="warning">
                                  {this.state.error}
                                </DropdownItem>
                                <DropdownItem disabled>email:</DropdownItem>
                                <DropdownItem disabled>
                                  <input
                                    type="text"
                                    className="abc"
                                    onChange={e => {
                                      this.setState({ email: e.target.value })
                                    }}
                                  />
                                </DropdownItem>

                                <DropdownItem disabled>password:</DropdownItem>
                                <DropdownItem disabled>
                                  <input
                                    type="text"
                                    onChange={e => {
                                      this.setState({
                                        password: e.target.value
                                      })
                                    }}
                                  />
                                </DropdownItem>
                              </div>
                              <DropdownItem divider />
                              <DropdownItem disabled>
                                <button
                                  // disabled={
                                  //   !this.state.email || !this.state.password
                                  // }
                                  type="submit"
                                  className="LoginButton"
                                >
                                  Log in
                                </button>
                              </DropdownItem>
                            </form>
                          </div>
                        )
                      }}
                    </Mutation>

                    <DropdownItem divider />
                    <DropdownItem disabled>Don't have an account?</DropdownItem>
                    <DropdownItem disabled>
                      <Link to="/signup">
                        <button className="SignupButton">Sign up</button>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
