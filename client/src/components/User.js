import React, {Component} from 'react';

class User extends Component {
    
    constructor(){
        super();
        this.state = {
            userName: "",
            accountCreated: "",
            favTeams: [],
            favPlayers: []
        }
    }
    
    render() {
    return (
        <div>
            Hello User
        </div>
    )
}
}


export default User;