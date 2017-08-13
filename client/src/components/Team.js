import React from 'react';
import UpcomingFixtures from './UpcomingFixtures'
import axios from 'axios';
import Fixture from './Fixture'

var teamFixtures = [];

const Team = (props) => {
    var linkToFixtures = props.teamInfo.team.fixtures;
    axios.get(linkToFixtures, {
        timeout: 5000,
        headers: {'X-Auth-Token': 'f09f3d45f18c4cb2bb456144f36fa451'}            
    })
        .then((res) => {
            teamFixtures = res.data.fixtures;
        })
    

        return (
            <div>
                <h2>{props.teamInfo.team.name}</h2>
                <img height="100" alt={props.teamInfo.team.name} src={props.teamInfo.team.crestUrl} />
                <h3>Fixtures</h3>
                {/* {teamFixtures.map((fixture, i) => {
                     <Fixture key={i} status={fixture.status} date={fixture.date} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName} /> })} */}
            </div>
        )
    }

export default Team;