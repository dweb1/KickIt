import React from 'react';

const UserProfile = (props) => {
    
    return (
        <div>
            <h3>{props.userInfo.username}'s Profile</h3>
            <div>
                <h4>Favorite Teams</h4>
                <ul>
                {props.userInfo.favTeams.map((team, i) => {
                return <li key={i} id={i}>{team.name} </li>})}
                </ul>
            </div>
            <div>
                <h4>Favorite Players</h4>
                <ul>
                {props.userInfo.favPlayers.map((player, i) => {
                return <li key={i} id={i}>{player.name} </li>})}
                </ul>
            </div>
        </div>
    )
}


export default UserProfile;