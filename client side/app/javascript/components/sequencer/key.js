import React, { Component } from "react";

class Key extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let kwfr = i => {
            return "calc(" + this.props.keyHeight + " * " + i + ")";
        }

        let pitches = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
        let posList = [10.5, 10, 8.5, 8, 7, 5.5, 5, 3.5, 3, 1.5, 1, 0];
        let whiteList = [true, false, true, false, true, true, false, true, false, true, false, true];
        let heightList = [1.5, 1, 2, 1, 1.5, 1.5, 1, 2, 1, 2, 1, 1.5]

        return (
            <div onMouseDown={ev => this.props.keyDown(ev, this.props.pitch)} onMouseOver={ev => this.props.keyEnter(ev, this.props.pitch)} className={"key " + (whiteList[this.props.pitch % 12] ? "w-key" : "b-key")} style={{
                top: kwfr((6 - Math.floor(this.props.pitch / 12)) * 12 + posList[this.props.pitch % 12]),
                height: kwfr(heightList[this.props.pitch % 12])
            }}>{pitches[this.props.pitch % 12] + (Math.floor(this.props.pitch / 12) + 1)}
            </div>
        )
    }
}

export default Key;