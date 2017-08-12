import React, { Component } from "react";
import { FaFutbolO } from 'react-icons/lib/fa';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Player from "./components/Player";
import Team from "./components/Team";
import Search from "./components/Search";


const SiteSymbol = styled.div`
  font-family: 'Alfa Slab One', cursive;
  font-weight: 500;
  margin-right: 5px;
  font-size: 30px; 
  margin
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  align-items: center;
`

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

  constructor(){
    super();
    this.state = {
        player: "",
        team: {
            id: "",
            name: "",
            crestUrl: "",
            roster: "",
            fixtures: ""
        }
        }
    }
  
_handleSubmit = () => {
  const newState = {...this.state};   
  this.setState(newState); 

  }

_searchByTeam = () => {
    const searchTeam = document.getElementById("team-search-box").value;
    axios.get('http://api.football-data.org/v1/teams/?name=' + searchTeam, {
        timeout: 5000,
        headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}            
    })
        .then((res) => {
            const foundTeamId = res.data.teams[0].id;         
            const newState = {...this.state};   
            newState.team.id = foundTeamId;    
            this.setState(newState);
        })
        .then(() =>{
            axios.get(`http://api.football-data.org/v1/teams/${this.state.team.id}`, {
            timeout: 5000,
            headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}
            })
                .then((res) => {
                    this.setState({ 
                        team: {
                            name: res.data.name,
                            crestUrl: res.data.crestUrl,
                            roster: res.data._links.players.href,
                            fixtures: res.data._links.fixtures.href
                        }
                    })
                })
            }
    )}

// _searchByPlayer = () => {
//     const searchPlayer = document.getElementById("player-search-box").value;
//     axios.get('http://api.football-data.org/v1/teams/?name=' + searchTeam, {
//         timeout: 5000,
//         headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}            
//     })
//         .then((res) => {
//             const foundTeamId = res.data.teams[0].id;         
//             const newState = {...this.state};   
//             newState.team.id = foundTeamId;    
//             this.setState(newState);
//         })
//         .then(() =>{
//             axios.get(`http://api.football-data.org/v1/teams/${this.state.team.id}`, {
//             timeout: 5000,
//             headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}
//             })
//                 .then((res) => {
//                     this.setState({ 
//                         team: {
//                             name: res.data.name,
//                             crestUrl: res.data.crestUrl,
//                             roster: res.data._links.players.href,
//                             fixtures: res.data._links.fixtures.href
//             }
//             })
//         })
//     }
// )}

  render() {
    const searchComponent = () => (
    <Search handleSubmit={this._handleSubmit} searchByTeam={this._searchByTeam} /> );

    const teamComponent = () => (
      <Team teamInfo={this.state} /> );

    return (
      <Router>
        <div>
          <NavBar>
            <TitleBox>
              <SiteSymbol>KickIt</SiteSymbol>
              <FaFutbolO size={25}/>
            </TitleBox>
            <Link to="/">Home</Link>
            <Link to="#">Profile</Link>
          </NavBar>
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/player/:playerId" component={Player} /> */}
            <Route path="/team" render={teamComponent} />
            <Route path="/search" render={searchComponent} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;