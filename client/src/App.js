import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Player from "./components/Player";
import Team from "./components/Team";
import Search from "./components/Search";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="#">Profile</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/player/:playerId" component={Player} /> */}
            <Route path="/team" component={Team} />
            <Route path="/search" component={Search} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;