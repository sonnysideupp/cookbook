import * as React from "react"
import Search from "react-search-box"
import "./navbar.css"

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

class Navigation extends React.Component {
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

  render() {
    if (this.state.loading) {
      return <div className="app__loading">Loading...</div>
    }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Welcome to iXCooking!</NavbarBrand>
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
                <NavLink href="/my-profile/">My Page</NavLink>
              </NavItem>
              <NavItem>
                <div className="welcome">Welcome : </div>
              </NavItem>
              <UncontrolledDropdown direction="left" nav inNavbar>
                <DropdownToggle caret>Login</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem disabled>username:</DropdownItem>
                  <DropdownItem disabled>
                    <input type="text" className="username" />
                  </DropdownItem>
                  <DropdownItem disabled>password:</DropdownItem>
                  <DropdownItem disabled>
                    <input type="text" className="password" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem disabled>
                    <button type="submit" className="loginButton">
                      Log in
                    </button>
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
