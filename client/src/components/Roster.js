import React from 'react';
import Player from './Player';
import styled from 'styled-components';

const RosterBox = styled.div`
border-style: dashed;
border-width: 8px;
background-color: white;
overflow-y: scroll;
height: 600px;
width: 350px;
`;

const Roster = (props) => {

    return (
        <div>
            <RosterBox>
            <h3> {props.teamInfo.team.name}'s Roster</h3>
            {props.teamInfo.searchedTeamRoster.map((player, i) => {
                return <Player 
                            key={i} id={i} name={player.name}
                            nationality={player.nationality} position={player.position}
                            jerseyNumber={player.jerseyNumber} 
                            dateOfBirth={player.dateOfBirth} 
                            addPlayerToUserFavorites={props.addPlayerToUserFavorites}/>
            })}
            </RosterBox>
        </div>
    )
}


export default Roster;