import React, { Component } from 'react';
import Sequencer from './sequencer/sequencer';
import SequencerGroup from './sequencer-group';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser);

class App extends Component {

    render() {
        return (
            <SequencerGroup />
        );
    }
}

export default App;
