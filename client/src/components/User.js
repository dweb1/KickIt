import React from 'react';
import NewUserForm from  './NewUserForm.js';

const User = (props) => {
    
    return (
        (props.user ? 
        <div>
            Hello User
        </div> :
        <div>
            <NewUserForm userInfo = {props.user} changeUsername={props.changeUsername} handleSubmit={props.handleSubmit}/>
        </div>)
    )
}


export default User;