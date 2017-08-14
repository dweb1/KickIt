import React from 'react';

const UserProfile = (props) => {
    
    return (
        <div>
            <h3>{props.userInfo.username}'s Profile</h3>
            <div>
                <h4>Favorite Teams</h4>
            </div>
            <div>
                <h4>Favorite Players</h4>
            </div>
        </div>
    )
}


export default UserProfile;