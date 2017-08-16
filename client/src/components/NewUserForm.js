import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const NewUser = styled.div`
    font-family: 'Alfa Slab One', cursive;
    font-size: 40px;
    position: absolute;
    top: 40%;
    left: 40%
`

const NewUserForm = (props) => {
    
    const handleClick = (e, history) => {
        e.preventDefault();
        props.handleSubmit();
      };

    return (
        <div>
            <form onSubmit={handleClick}>
                <div>
                    <NewUser>
                        <label htmlFor="username">Username:</label><br/>
                        <input id="usernameInputOnForm" value={props.username} type="text" name="username" required/>
                        <input type="submit" value="Add User"/>
                    </NewUser>
                </div>
            </form>
        </div>
    )
}

export default withRouter(NewUserForm);