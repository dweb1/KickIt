import React, {Component} from 'react';
import axios from 'axios';
import Fixture from './Fixture';

// var fixtureResponse = [];

class Home extends Component {
    constructor(){
        super();
        this.state = {
          fixtures: []
        }
      }


    componentWillMount (){
        axios.get('http://api.football-data.org/v1/fixtures', {
            timeout: 5000,
            headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}            
        })
            .then((res) => {
                this.setState(res.data);
                });
        }
    

    render() {
        return (
            <div>
                <form method="get" action="/search">
                    <button type="submit">Go to Search</button>
                </form>
                <h3>Upcoming Fixtures</h3>
                {this.state.fixtures.map((fixture, i) => {
                    return <Fixture key={i} date={fixture.date} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName} />})}
            </div>
        )
    }
}

export default Home;