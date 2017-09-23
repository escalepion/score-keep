import React, { Component } from 'react';

import { Players } from '../api/players';

export default class AddPlayer extends Component {
    handleSubmit(e) {
        const playerName = e.target.playerName.value;
    
        e.preventDefault();
    
        if (playerName) {
        e.target.playerName.value = '';
        Players.insert({
            name: playerName,
            score: 0
        });
        }
    }

    render() {
        return (
        <div className="item">
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="form__input" type="text" name="playerName" placeholder="Player name" />
                <button className="button" type="submit" >Add Player</button>
            </form>
         </div>
        );
    }
}
