import React, {Component} from 'react';
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

class Team extends Component {

    _addTeamToUser = () => {
        this.props.addTeamToUserFavorites(this.props);
      }
    
    _handleClick = (e, history) => {
        this.props.history.push('/roster');
    }

    render(){
    return (
        <div>
            <TeamPage>
                <h2>{this.props.teamInfo.team.name}</h2>
                <button onClick={this._addTeamToUser}>
                    Add This Team to Favorites
                </button>
                <img height="100" alt={this.props.teamInfo.team.name} src={this.props.teamInfo.team.crestUrl} />
                <Button onClick={this._handleClick}>
                    View Roster
                </Button>
                <ScoreBox>
                <div>
                <h3>Upcoming Fixtures</h3>
                    {this.props.teamInfo.searchedTeamFixtures.map((fixture, i) => {
                        return fixture.status !== "FINISHED" ? <Fixture key={i} status={fixture.status} date={fixture.date} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName} /> : null})}
                </div>
                <div>
                <h3>Recent Results</h3>
                    {this.props.teamInfo.searchedTeamFixtures.map((fixture, i) => {
                        return (fixture.status === "FINISHED" ? <Fixture key={i} status={fixture.status} result={fixture.result} homeTeam={fixture.homeTeamName} awayTeam={fixture.awayTeamName}  /> : null)})}
                </div>
                </ScoreBox>
            </TeamPage>
        </div>
    )
}
}

export default withRouter(Team);