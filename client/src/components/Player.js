import React, {Component} from 'react';
import styled from 'styled-components';

const IndivPlayer = styled.div`
    border-style: solid;
    border-width: 2px;
`

class Player extends Component {
    
    _addPlayerToUser = () => {
        this.props.addPlayerToUserFavorites(this.props);
      }

    render(){
    return (
        <div>
            <IndivPlayer>
                <p><strong>Name:</strong> {this.props.name}</p>
                <p><strong>Jersey Number:</strong> {this.props.jerseyNumber}</p>
                <p><strong>Nationality:</strong> {this.props.nationality}</p>
                <p><strong>Position:</strong> {this.props.position}</p>
                <p><strong>DOB:</strong> {this.props.dateOfBirth}</p>
                <button onClick={this._addPlayerToUser}>
                    Add This Player to Favorites
                </button>
            </IndivPlayer>
        </div>
    )
}
}

export default Player;