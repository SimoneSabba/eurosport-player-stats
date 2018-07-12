import React, { Component, Fragment } from 'react';
import api from '../../helpers/api';

// Components
import List from '../../components/List/List';
import Player from '../../components/Player/Player';

class Home extends Component {

    state = {
        error: false,
        players: []
    };

    componentDidMount() {
        api.getPlayers()
            .then(response => {
                console.log(response.data);
                this.setState({ players: response.data.players });
            })
            .catch(error => this.setState({ error: true }));
    }

    render() {
        let players = <h1>Some error occurs fetching data. Please retry</h1>;

        if (!this.state.error) {
            players = this.state.players.map(player => {
                return <Player player={player} key={player.shortname} />;
            });
        }

        return (
            <Fragment>
                <List>
                    {players}
                </List>
            </Fragment>
        )
    }
}

export default Home;