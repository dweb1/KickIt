import React from 'react';
import styled from 'styled-components';

const FavoritesBox = styled.div`
    border-style: dashed;
    border-width: 8px;
    background-color: white;
    overflow-y: scroll;
    width: 350px;
`;

const UserName = styled.div`
    font-family: 'Alfa Slab One', cursive;
    `

const UserProfile = (props) => {

    return (
        <div>
        <UserName>
            <h3>{props.userInfo.username}'s Profile</h3>
        </UserName>
            <div>
                <FavoritesBox>
                    <h4>Favorite Teams</h4>
                    <ul>
                    {props.userInfo.favTeams.map((team, i) => {
                    return (
                        <li key={i} id={i}>
                            <p>{team.name}</p>
                            <button onClick={() => props.removeTeamFromUserFavs(i)}>
                                Remove
                            </button>
                        </li>
                    )})}
                    </ul>
                </FavoritesBox>
            </div>
            <div>
                <FavoritesBox>
                    <h4>Favorite Players</h4>
                    <ul>
                    {props.userInfo.favPlayers.map((player, i) => {
                    return (
                        <li key={i} id={i}>
                            <p>{player.name}</p>
                            <button onClick={() => props.removePlayerFromUserFavs(i)}>
                                Remove
                            </button>
                        </li>
                    )})}
                    </ul>
                </FavoritesBox>
            </div>
        </div>
    )
}


export default UserProfile;