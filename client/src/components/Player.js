import React from 'react';
import styled from 'styled-components';

const IndivPlayer = styled.div`
    border-style: solid;
    border-width: 2px;
`

const Player = (props) => {

    return (
        <div>
            <IndivPlayer>
                <p><strong>Name:</strong> {props.name}</p>
                <p><strong>Jersey Number:</strong> {props.jerseyNumber}</p>
                <p><strong>Nationality:</strong> {props.nationality}</p>
                <p><strong>Position:</strong> {props.position}</p>
                <p><strong>DOB:</strong> {props.dateOfBirth}</p>

            </IndivPlayer>
        </div>
    )
}


export default Player;