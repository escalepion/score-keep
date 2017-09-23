import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from '../api/players';

class Player extends Component {
    render() {
        const { player } = this.props;
        const itemClassName = `item item--position-${player.rank}`;
        return (
        <div className={itemClassName}>
           <div className="player">
               <div>
               <h3 className="player__name">{player.name}</h3>
                    <p className="player__stats">
                     {player.position} place- {player.score} point(s).
                    </p>
               </div>
                <div className="player__actions">
                <button className="button button--round" onClick={() => { Players.update({ _id: player._id }, {$inc: { score: -1 } }); }}>
                    -
                </button>
                    <button className="button button--round" onClick={() => { Players.update(player._id, {$inc: { score: 1 } }); }}>
                        +
                    </button>
                    <button className="button button--round" onClick={() => { Players.remove(player._id); }}>
                        X
                    </button>
                </div>
                </div>
        </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
};

export default Player;
