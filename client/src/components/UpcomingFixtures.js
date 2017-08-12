import React from 'react';
import Fixture from './Fixture';

const UpcomingFixtures = (props) => {
    return (
        <div>
            <h3>Upcoming Fixtures</h3>
                {props.fixtures.map((fixture, i) => {
                    return (fixture.status !== "FINISHED" ? <Fixture key={i} date={fixture.date} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName} /> : null)})}
        </div>
    )
}

export default UpcomingFixtures;