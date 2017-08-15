import React, { Component } from "react";
import { FaFutbolO } from 'react-icons/lib/fa';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Player from "./components/Player";
import Team from "./components/Team";
import Roster from "./components/Roster";
import User from "./components/User";


const SiteSymbol = styled.div`
  font-family: 'Alfa Slab One', cursive;
  font-weight: 500;
  margin-right: 5px;
  font-size: 30px; 
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

const HomeScreen = styled.div`
  background: url("http://stadiumdb.com/pictures/stadiums/ita/juventus_stadium/juventus_stadium08.jpg") no-repeat center center;
  background-size: 100% 100%;
  height:750px;
`

class App extends Component {

  constructor(){
    super();
    this.state = {
        user: {
          id: "",
          username: "",
          accountCreated: "",
          favTeams: [],
          favPlayers: []
      },
        searchedTeamRoster: [],
        searchedTeamFixtures: [],
        team: {
            id: "",
            name: "",
            crestUrl: "",
            roster: "",
            fixtures: ""
        }
        }
    }

  _handleSubmit = (event) => {
    // event.preventDefault();
    const newState = {...this.state};
    newState.user.accountCreated = new Date();
    newState.user.username = document.getElementById("usernameInputOnForm").value;
    this.setState(newState);
    axios.post('/api/user', this.state.user).then((res) => {
      newState.user.id = res.data._id;
      this.setState(newState)
    })
  };

_addPlayerToUserFavorites = (newPlayer, index) => {
  const newState = {...this.state.user};
  newState.favPlayers.push(newPlayer);
  this.setState({user: newState});
  const payload = {
    favPlayers: newState.favPlayers
  };
  axios.put(`api/user/${this.state.user.id}/updatefavplayers`, payload).then((res) => {
    console.log("Successfully Updated")
    this.setState({user: newState});
    
  })
}

_addTeamToUserFavorites = (newTeam, index) => {
  const newState = {...this.state.user};
  newState.favTeams.push(newTeam.teamInfo.team);
  const payload = {
    favTeams: newState.favTeams
  };
  this.setState({user: newState});
  axios.put(`api/user/${this.state.user.id}/updatefavteams`, payload).then((res) => {
    console.log("Successfully Updated");
    this.setState({user: newState});
    
  })
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
                            id: res.data.id,
                            name: res.data.name,
                            crestUrl: res.data.crestUrl,
                            roster: res.data._links.players.href,
                            fixtures: res.data._links.fixtures.href
                        }
                    })
                })
                .then(() => {
                  axios.get(this.state.team.fixtures, {
                    timeout: 5000,
                    headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}
                  })
                    .then((res) => {
                      this.setState({
                      searchedTeamFixtures: res.data.fixtures
                    })
                  })
                })
                .then(() => {
                  axios.get(this.state.team.roster, {
                    timeout: 5000,
                    headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}
                  })
                  .then((res) => {
                    this.setState({
                      searchedTeamRoster: res.data.players
                    })
                  })
                })
            })
        }
  
  _removePlayerFromUserFavs = (index) => {
    console.log(index)
    const newState = {...this.state};
    newState.user.favPlayers.splice(index, 1);
    this.setState(newState);
  };

  render() {
    const homeComponent = () => (
    <Home searchByTeam={this._searchByTeam} /> );

    const teamComponent = () => (
      <Team teamInfo={this.state} addTeamToUserFavorites={this._addTeamToUserFavorites} /> );

    const rosterComponent = () => (
      <Roster addPlayerToUserFavorites={this._addPlayerToUserFavorites} teamInfo={this.state} /> );

    const userComponent = () => (
      <User 
        userInfo = {this.state.user} 
        changeUsername={this._changeUsername} 
        handleSubmit={this._handleSubmit}
        removePlayerFromUserFavs={this._removePlayerFromUserFavs}/>);

    return (
      <Router>
        <div>
          <NavBar>
            <TitleBox>
              <SiteSymbol>KickIt</SiteSymbol>
              <FaFutbolO size={25}/>
            </TitleBox>
            <Link to="/">Home</Link>
            <Link to="/user">Profile</Link>
          </NavBar>
          <HomeScreen>
            <div>
              <Route exact path="/" render={homeComponent} /> 
              <Route path="/roster" render={rosterComponent} />
              <Route path="/team" render={teamComponent} />
              <Route path="/user" render={userComponent} />
            </div>
          </HomeScreen>
        </div>
      </Router>
    );
  }
}

export default App;