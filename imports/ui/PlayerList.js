import React from 'react';
import FlipMove from 'react-flip-move';

import Player from './Player';


class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message"> There is no player. Add one! </p>
                </div>
            );
        }
        return this.props.players.map((player) => {
        return (
            <Player key={player._id} player={player} />
            );
        });
    }
    render() {
        return (
        <div>
            <FlipMove maintainContainerHeight={true} duration={400} easing="ease-out">
            {this.renderPlayers()}
            </FlipMove>
        </div>
        );
    }
}
export default PlayerList;
