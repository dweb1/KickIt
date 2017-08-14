import React, {Component} from 'react';
import UpcomingFixtures from './UpcomingFixtures'
import axios from 'axios';
import Fixture from './Fixture'

class Team extends Component {
    
    // componentWillMount(){
    //     console.log(this.props.teamInfo.fixtures);
    //     axios.get(this.props.teamInfo.fixtures, {
    //         timeout: 5000,
    //         headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}            
    //     })
    //         .then((res) => {
    //             console.log(res);
    //             const foundTeamFixtureList = res.teamInfo.team.fixtures;         
    //             const newState = {...this.state};   
    //             newState.searchedTeamFixtures = foundTeamFixtureList;    
    //             this.setState(newState);
    //         })
        render() {
        return (
            <div>
                <h2>{this.state.team.name}</h2>
                <img height="100" alt={this.state.team.name} src={this.state.team.crestUrl} />
                <h3>Fixtures</h3>
                {/* {teamFixtures.map((fixture, i) => {
                     <Fixture key={i} status={fixture.status} date={fixture.date} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName} /> })} */}
            </div>
        )
    }
    }


export default Team;