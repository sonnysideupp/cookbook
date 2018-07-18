import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/home-page/home-page"

import MyProfile from "./components/my-profile/my-profile"
// import HomePage2 from "./components/home-page2/home-page2"
import Post from "./components/post_click/post"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="/post" component={Post} />
          {/* <Route exact={true} path="/HomePage2" component={HomePage2} /> */}
          <Route exact={true} path="/my-profile" component={MyProfile} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)
