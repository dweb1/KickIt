import React, { Component } from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Player from "./components/Player";
import Team from "./components/Team";
import Search from "./components/Search";

const NavBar = styled.div`
height: 30px;
background-color: green;
color: white;
text-decoration: none;
display: flex;
justify-content: flex-end;
align-items: center;
a {
  padding: 0 15px;
  color: white;
  text-decoration: none;
 &:hover {
   text-decoration: underline;
 }
}
`;

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <Link to="/">Home</Link>
            <Link to="#">Profile</Link>
          </NavBar>
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