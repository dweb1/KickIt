import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component {
    
    constructor(){
        super();
        this.state = {
            player: "",
            team: {
                name: "",
                crestUrl: "",
                roster: "",
                fixtures: ""
            }
            }
        }

    componentWillMount(){

    }

    _searchByTeam = () => {
        const teamFound = document.getElementById("team-search-box").value;
        axios.get('http://api.football-data.org/v1/teams/109', {
            timeout: 5000,
            headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    team: {
                        name: res.data.shortName,
                        crestUrl: res.data.crestUrl,
                        roster: res.data._links.players.href,
                        fixtures: res.data._links.fixtures.href
                }
                })
        })
    }

    render() {
    return (
    <section id="kickIt-search">
      <strong>Search by:</strong> Team <em>or</em> Player

      <div className="search">
        <form id="team-search-form" method="get">
          <input id="team-search-box" type="text" name="title" placeholder="TEAM NAME" />
          <input onClick={this._searchByTeam} type="button" value="Search" />
          
        </form>
      </div>

      <div className="search">
        <form id="player-search-form" method="get">
          <input id="player-search-box" type="text" name="id" placeholder="PLAYER NAME" />
          <input onClick={this._searchByPlayer} type="button" value="Search" />
        </form>
      </div>

    </section>
  );
};
}

export default Search;