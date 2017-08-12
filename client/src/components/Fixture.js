import React from 'react';

const Fixture = (props) => {

        return (
            props.status !== "FINISHED" ? <p>{props.homeTeam} v. {props.awayTeam} on {props.date}</p> : <p>{props.homeTeam} <em><strong>[{props.result.goalsHomeTeam}] - [{props.result.goalsAwayTeam}]</strong></em> {props.awayTeam}</p>
        )
    }

export default Fixture;