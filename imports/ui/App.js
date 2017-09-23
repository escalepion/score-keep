import React, { Component } from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {
    render() {
    const { title, players } = this.props;    
        return (
            <div>
                <TitleBar title={title} />
                <div className="wrapper">
                    <PlayerList players={players} />
                    <AddPlayer />
                </div>
            </div>
        );
    }
}
export default App;
