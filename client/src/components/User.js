import React from 'react';
import NewUserForm from  './NewUserForm.js';
import UserProfile from './UserProfile.js';

const User = (props) => {
    
    return (
        (props.userInfo.username !== "" ? 
        <div>
            <UserProfile 
                userInfo={props.userInfo}
                removePlayerFromUserFavs={props.removePlayerFromUserFavs}
                removeTeamFromUserFavs={props.removeTeamFromUserFavs}/>
        </div> :
        <div>
            <NewUserForm userInfo={props.user} changeUsername={props.changeUsername} handleSubmit={props.handleSubmit}/>
        </div>)
    )
}


export default User;