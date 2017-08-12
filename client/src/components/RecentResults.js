import React from 'react';
import Fixture from './Fixture';

const RecentResults = (props) => {
    return (
        <div>
            <h3>Recent Results</h3>
                {props.fixtures.map((fixture, i) => {
                    return (fixture.status === "FINISHED" ? <Fixture key={i} status={fixture.status} result={fixture.result} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName}  /> : null)})}
        </div>
    )
}

export default RecentResults;