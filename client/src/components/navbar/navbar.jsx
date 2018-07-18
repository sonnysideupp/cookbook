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
    password: ""
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
    if (this.state.loading) {
      return <div className="app__loading">Loading...</div>
    }
    return (
      <div>
        <Navbar className="Navbar" light expand="md">
          <NavbarBrand className="NavbarTitle" href="/">iX Cooking App</NavbarBrand>
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
                <NavLink className="my-page" href="/my-profile/">
                  My Page
                </NavLink>
              </NavItem>
              <NavItem className="welcome">
                <p className="welcomeText">Welcome : </p>
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

                <DropdownMenu>
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
                                this.props.history.push("/")
                              } catch (error) {
                                localStorage.removeItem("token")
                                localStorage.removeItem("username")
                                // this.input = "
                                // this.clearForm()
                                document.getElementById("myForm").reset()
                                document.getElementById("warning").value =
                                  "yourv"
                              }
                            }}
                          >
                            <div className="inputBox">
                              <DropdownItem disabled id="warning">
                                Please
                              </DropdownItem>
                              <DropdownItem disabled>email:</DropdownItem>
                              <DropdownItem disabled>
                                <input
                                  type="text"
                                  className="abc"
                                  onChange={e => {
                                    this.setState({ email: e.target.value })
                                  }}
                                  placeholder="email"
                                />
                              </DropdownItem>

                              <DropdownItem disabled>password:</DropdownItem>
                              <DropdownItem disabled>
                                <input
                                  type="text"
                                  onChange={e => {
                                    this.setState({ password: e.target.value })
                                  }}
                                  placeholder="password"
                                />
                              </DropdownItem>
                            </div>
                            <DropdownItem divider />
                            <DropdownItem disabled>
                              <button type="submit" className="LoginButton">
                                LOGIN!
                              </button>
                            </DropdownItem>
                          </form>
                        </div>
                      )
                    }}
                  </Mutation>

                  <DropdownItem divider />
                  <DropdownItem disabled>
                    You don't have an account?
                  </DropdownItem>
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
