import * as React from "react"
import "./dropdown-login.css"

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
// import HomePage from "../home-page/home-page"

class DropdownLogin extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
      // login logout button
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
      </ButtonDropdown>
    )
  }
}

export default DropdownLogin
