import React from 'react';

const Team = (props) => {

        return (
            <div>
                <h2>{props.teamInfo.team.name}</h2>
                <img alt={props.teamInfo.team.name} src={props.teamInfo.team.crestUrl} />
            </div>
        )
    }

export default Team;