import React from 'react';
import Fixture from './Fixture'
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const ScoreBox = styled.div`
display: flex;
flex-direction: row;
border-style: dashed;
border-width: 8px;
background-color: white;
overflow-y: scroll;
height: 600px;
width: 750px;
`;

const TeamPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Button = styled.a`
border-radius: 5px;
padding: 15px 25px;
font-size: 22px;
text-decoration: none;
margin: 20px;
color: #fff;
position: relative;
display: inline-block;
background-color: #55acee;
box-shadow: 0px 5px 0px 0px #3C93D5;
&:hover{
  background-color: #6FC6FF
}
&:active{
  transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
}
`;

const Team = (props) => {
    
    const handleClick = (e, history) => {
        props.history.push('/roster');
    }

    return (
        <div>
            <TeamPage>
                <h2>{props.teamInfo.team.name}</h2>
                <img height="100" alt={props.teamInfo.team.name} src={props.teamInfo.team.crestUrl} />
                <Button onClick={handleClick}>
                    View Roster
                </Button>
                <ScoreBox>
                <div>
                <h3>Upcoming Fixtures</h3>
                    {props.teamInfo.searchedTeamFixtures.map((fixture, i) => {
                        return (fixture.status !== "FINISHED" ? <Fixture key={i} status={fixture.status} date={fixture.date} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName} /> : null)})}
                </div>
                <div>
                <h3>Recent Results</h3>
                    {props.teamInfo.searchedTeamFixtures.map((fixture, i) => {
                        return (fixture.status === "FINISHED" ? <Fixture key={i} status={fixture.status} result={fixture.result} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName}  /> : null)})}
                </div>
                </ScoreBox>
            </TeamPage>
        </div>
    )
}

export default withRouter(Team);