import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <form method="get" action="/search">
                    <button type="submit">Go to Search</button>
                </form>
            </div>
        )
    }
}

export default Home;