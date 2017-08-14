import React, {Component} from 'react';
import axios from 'axios';

class NewUserForm extends Component {
    
    constructor() {
        super();
        this.state = {
            username: "",
            accountCreated: "",
            favTeams: [],
            favPlayers: []
        };
    }
   
    _handleSubmit = (event) => {
        event.preventDefault();
        this.setState({accountCreated: new Date()});
        axios.post('/api/user', this.state).then((res) => {
          console.log("success");
        })
      };

    _changeUsername = (event) => {
        const newState = {...this.state};
        newState.username = event.target.value;
        this.setState(newState);
    };

    render() {
    return (
        <div>
            <form onSubmit={this._handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={this._changeUsername} value={this.state.username} type="text" name="username"/>
                    <button>Add User</button>
                </div>
            </form>
        </div>
    )
}
}

export default NewUserForm;