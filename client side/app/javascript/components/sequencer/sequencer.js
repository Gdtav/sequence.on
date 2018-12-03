import React, { Component } from "react";
import Grid from './grid';
import Keyboard from './keyboard';
import piano from "./Assets/Images/piano.png"
import "./sequencer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sequencer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            instrumentName: "Piano",
            username: "joaopat98"
        }
        this.keyboard = React.createRef();
    }

    scroll = s => {
        console.log(this.keyboard.current);
        this.keyboard.current.scrollTop = s;
    }

    render() {
        if (this.state.show) {
            return (
                <div className="sequencer-container" style={{ width: this.props.width, height: this.props.height }}>
                    <div className="sequencer-header">
                        <img className="header-element instrument left" src={piano} />
                        <p className="header-element sec left">{this.state.instrumentName}</p>
                        <FontAwesomeIcon icon="user" className="header-element right" />
                        <p className="header-element sec">{this.state.username}</p>
                    </div>
                    <div className="sequencer">
                        <Keyboard scrollRef={this.keyboard} keyHeight="20px" height="100%" width="10%" instrument={this.props.instrument} />
                        <Grid onScroll={this.scroll} xlen={128} timer={this.props.timer} octaves={7} bpm={120} cellWidth="30px" cellHeight="20px" height="100%" width="90%" instrument={this.props.instrument} />
                    </div>
                </div >
            );
        }
    }
}

export default Sequencer;