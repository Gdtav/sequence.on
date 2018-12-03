import React, { Component } from "react";
import "./sequencer.css";
import Note from "./note";
import MIDISounds from "midi-sounds-react";
import AccurateTimer from "accurate-timer-js";
import caretTop from "./Assets/Images/caret_top.png"
import caretLine from "./Assets/Images/caret_line.png"

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNotes: [],
            notes: [],
            noteSize: 1,
            caret: 0
        }
        this.shiftState = false;
    }

    addNote = (x, y) => {
        this.setState(prevState => ({
            notes: [...prevState.notes, { x: x, y: y, length: this.state.noteSize }]
        }));
    }

    removeNotes = ev => {
        if (String.fromCharCode(ev.keyCode) === ".") {
            let notes = this.state.notes.slice();
            for (let i = 0; i < this.state.selectedNotes.length; i++) {
                let j = notes.indexOf(this.state.selectedNotes[i]);
                notes.splice(j, 1);
            }
            this.setState({ notes: notes, selectedNotes: [] });
        }
    }

    selectNote = (ev, note, selected) => {
        if (note !== undefined && !selected) {
            if (this.shiftState) {
                this.setState(prevState => ({
                    selectedNotes: [...prevState.selectedNotes, note]
                }));
            }
            else {
                this.setState({ selectedNotes: [note,] });
            }
        }
        else if (!ev.target.classList.contains("note")) {
            this.setState({ selectedNotes: [] })
        }
    }

    changeLen = (note, length) => {
        let i = this.state.notes.indexOf(note)
        let notes = this.state.notes.slice();
        notes[i].length = length;
        this.setState({ notes: notes, noteSize: length });
    }

    updateShiftState = ev => {
        if (ev.keyCode === 16) {
            this.shiftState = ev.type === "keydown"
        }
    }

    componentDidMount() {
        document.addEventListener("click", this.selectNote);
        document.addEventListener("keydown", this.removeNotes);
        document.addEventListener("keyup", this.updateShiftState);
        document.addEventListener("keydown", this.updateShiftState);
        this.props.timer.registerCallback(this.playNotes);
    }

    componentWillUnmount() {
        this.props.timer.removeCallback(this.playNotes);
    }

    playNotes = cur => {
        let notes = this.state.notes.filter(note => note.x === cur);
        notes = notes.map(note => {
            return { pitch: 23 + (this.props.octaves * 12) - note.y, duration: this.props.timer.timeUnits(note.length) };
        });
        notes.forEach(note => {
            this.midiSounds.playChordNow(this.props.instrument, [note.pitch], note.duration);
        })
    }

    render() {

        let xarr = [];
        let yarr = [];
        for (let i = 0; i < this.props.xlen; i++)
            xarr.push(i);
        for (let i = 0; i < this.props.octaves * 12; i++)
            yarr.push(i);
        return (
            <div onScroll={ev => this.props.onScroll(ev.target.scrollTop)} className="grid-container" style={{ height: this.props.height, width: this.props.width }}>
                <div className="grid" style={{
                    width: "calc(" + this.props.xlen + " * " + this.props.cellWidth + ")"
                }}>{
                        yarr.map(i => {
                            return (
                                <div className="grid-row">
                                    {xarr.map(j => {
                                        return (
                                            <div onClick={ev => ev.preventDefault()} onDoubleClick={() => this.addNote(j, i)} style={{ height: this.props.cellHeight, width: this.props.cellWidth }} className="grid-item back-cell">                                        </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="notes">
                    {this.state.notes.map(note => {
                        return <Note key={Math.floor(Math.random() * 1000000)}
                            onClick={this.selectNote}
                            cellHeight={this.props.cellHeight}
                            cellWidth={this.props.cellWidth}
                            note={note}
                            changeLen={this.changeLen}
                            select={this.selectNote}
                            selected={this.state.selectedNotes.indexOf(note) !== -1} />
                    })}
                </div>
                {/* <div className="caret" style={{
                    left: "calc(" + this.props.cellWidth + " * " + this.state.caret + ")",
                    top: 0
                }}>
                    <img className="caret-top" style={{
                        width: this.props.cellWidth,
                        height: this.props.cellHeight
                    }} src={caretTop} />
                </div> */}
                <div hidden>
                    <MIDISounds
                        ref={(ref) => (this.midiSounds = ref)}
                        appElementName="root"
                        instruments={[this.props.instrument]}
                    />
                </div>
            </div>
        )
    }
}

export default Grid;