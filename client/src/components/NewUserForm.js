import React from 'react';
import {withRouter} from 'react-router-dom';

const NewUserForm = (props) => {
    
    const handleClick = (e, history) => {
        e.preventDefault();
        props.handleSubmit();
      };

    return (
        <div>
            <form onSubmit={handleClick}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="usernameInputOnForm" value={props.username} type="text" name="username" required/>
                    <input type="submit" value="Add User"/>
                </div>
            </form>
        </div>
    )
}

export default withRouter(NewUserForm);