import React, { Component } from "react"
import Search from "react-search-box"
// import Dropdown from "react-dropdown"
import DropdownLogin from "../dropdown-login/dropdown-login"
import ToggleButton from "react-toggle-button"

import "./navigation.css"

class Navigation extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      loading: false
    }
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
      <div className="content__search content__search--with-full_name">
        <div className="search__component">
          <Search
            data={this.state.data}
            onChange={this.handleChange.bind(this)}
            placeholder="Search your food"
            class="search-class"
            searchKey="full_name"
          />
        </div>

        <DropdownLogin />
      </div>
    )
  }
}

export default Navigation
