import * as React from "react"
import Search from "react-search-box"
import "./navbar.css"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
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

class Navigation extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  }
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,

      // search box
      data: [],
      loading: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentDidMount() {
    this.setState({
      loading: true
    })

    fetch("https://api.github.com/search/repositories?q=topic:ruby+topic:rails")
      .then(res => res.json())
      .then(data => {
        console.log(data.items)
        this.setState({
          data: data.items,
          loading: false
        })
      })
  }

  handleChange(value) {
    console.log(value)
  }

  onLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    this.props.history.push("/")
  }

  clearForm = () => {
    document.getElementById("myForm").reset()
    // this.setState({
    //   email: "",
    //   password: ""
    // })
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
            <h3>iX Cooking App</h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="search__nav">
                <div className="search__component">
                  <Search
                    data={this.state.data}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Search your food"
                    class="search-class"
                    searchKey="full_name"
                  />
                </div>
              </NavItem>
            </Nav>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  disabled={!localStorage.getItem("token")}
                  className="my-page"
                  href="/my-profile/"
                >
                  My Page
                </NavLink>
              </NavItem>
              <NavItem className="welcome">
                <p className="welcomeText">Welcome : </p>
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
                    <DropdownToggle caret>Login</DropdownToggle>
                  )}
                </div>

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
                                localStorage.setItem("token", data.login.token)
                                localStorage.setItem(
                                  "username",
                                  data.login.user.username
                                )
                                DropdownToggle.propTypes.disabled = true
                                this.props.history.push("/")
                              } catch (error) {
                                localStorage.removeItem("token")
                                localStorage.removeItem("username")
                                // window.confirm(
                                //   "Wrong Account! Try again please"
                                // )

                                // this.input = "
                                // this.clearForm()
                                // document.getElementById("myForm").reset()
                                this.setState({
                                  email: "",
                                  password: "",
                                  error: "Oops! Something went wrong."
                                })
                                // document.getElementById("warning").value =
                                //   "yourv"
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
                                    this.setState({ password: e.target.value })
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
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
