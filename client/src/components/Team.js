import React from 'react';
import UpcomingFixtures from './UpcomingFixtures'
import Fixture from './Fixture'

const Team = (props) => {
    
    return (
        <div>
            <h2>{props.teamInfo.team.name}</h2>
            <img height="100" alt={props.teamInfo.team.name} src={props.teamInfo.team.crestUrl} />
            <h3>Fixtures</h3>
            {props.teamInfo.searchedTeamFixtures.map((fixture, i) => {
                   return <Fixture key={i} status={fixture.status} date={fixture.date} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName} /> })}
        </div>
    )
}

export default Team;