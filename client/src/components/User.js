import React from 'react';
import NewUserForm from  './NewUserForm.js';

const User = (props) => {
    
    return (
        (props.user ? 
        <div>
            Hello User
        </div> :
        <div>
            <NewUserForm />
        </div>)
    )
}


export default User;