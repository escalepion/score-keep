import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from '../imports/api/players';
import App from '../imports/ui/App';


Meteor.startup(() => {
    Tracker.autorun(() => {
        const title = 'Score Keep';
        const players = Players.find({}, {
            sort: {
                score: -1
            }
        }).fetch();
       const positionedPlayers = calculatePlayerPositions(players);
        ReactDom.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
    });
});
