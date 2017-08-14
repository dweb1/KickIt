import React from 'react';

const NewUserForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={props.changeUsername} value={props.username} type="text" name="username" required/>
                    <button>Add User</button>
                </div>
            </form>
        </div>
    )
}

export default NewUserForm;