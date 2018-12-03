import React, { Component } from "react";
import Timer from "./timer";
import Sequencer from "./sequencer/sequencer";

class SequencerGroup extends Component {
    constructor(props) {
        super(props);
        this.timer = new Timer(60 / 8 / 120, 128);
        this.timer.start();
    }

    render() {
        return (
            <div>
                <Sequencer instrument={3} height="70vh" width="80%" timer={this.timer} show={true} />
                <Sequencer instrument={170} height="70vh" width="80%" timer={this.timer} show={true} />
            </div>
        )
    }
}

export default SequencerGroup;