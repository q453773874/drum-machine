import React, { Component } from 'react';
import './App.css';

const MUSIC_DIC = {
  "Q": "Heater 1",
  "W": "Heater 2",
  "E": "Heater 3",
  "A": "Heater 4",
  "S": "Clap",
  "D": "Open HH",
  "Z": "Kick n'Hat",
  "X": "Kick",
  "C": "Closed HH"

}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      power: true,
      bank: false,
      musicName: "",
      audioSource: ""
    }
  }
  componentWillMount() {
    document.addEventListener("keydown", this.onHandleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onHandleKeyPress, false);
  }

  onHandleClickSwitch = (e) => {
    if (e.target.id === "power-switch") {
      this.setState({
        power: !this.state.power,
        musicName: ""
      })
    }
    if (e.target.id === "bank-switch") {
      this.setState({ bank: !this.state.bank })
    }
  }

  onHandleClick = (e) => {
    const id = e.target.id.match(/([A-Z]{1})(?=-)/)[0]
    // document.getElementById(id).play()
    if (this.state.power) {
      this.setState({ musicName: MUSIC_DIC[id] })
    }
  }

  onHandleKeyPress = (e) => {
    const keyPressed = e.key.toUpperCase()
    if (Object.keys(MUSIC_DIC).indexOf(keyPressed) !== -1) {
      this.setState({ musicName: MUSIC_DIC[keyPressed] })
    }
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <div className="left">
            <div className="pad-area">
              <p className="drum-pad" id="Q-pad" onClick={this.onHandleClick}>Q
              <audio className="clip" id="Q" src=""></audio>
              </p>
              <p className="drum-pad" id="W-pad" onClick={this.onHandleClick}>W
              <audio className="clip" id="W" src=""></audio>
              </p>
              <p className="drum-pad" id="E-pad" onClick={this.onHandleClick}>E
              <audio className="clip" id="E" src=""></audio></p>
              <p className="drum-pad" id="A-pad" onClick={this.onHandleClick}>A
              <audio className="clip" id="A" src=""></audio></p>
              <p className="drum-pad" id="S-pad" onClick={this.onHandleClick}>S
              <audio className="clip" id="S" src=""></audio></p>
              <p className="drum-pad" id="D-pad" onClick={this.onHandleClick}>D
              <audio className="clip" id="D" src=""></audio></p>
              <p className="drum-pad" id="Z-pad" onClick={this.onHandleClick}>Z
              <audio className="clip" id="Z" src=""></audio></p>
              <p className="drum-pad" id="X-pad" onClick={this.onHandleClick}>X
              <audio className="clip" id="X" src=""></audio></p>
              <p className="drum-pad" id="C-pad" onClick={this.onHandleClick}>C
              <audio className="clip" id="C" src=""></audio></p>
            </div>
          </div>
          <div className="right">
            <p style={{ textAlign: "right", marginRight: "5px" }}>FCC <i className="fab fa-free-code-camp"></i></p>
            <div className="power-btn">
              <p>Power</p>
              <label className="switch">
                <input type="checkbox" id="power-switch" checked={this.state.power} onChange={this.onHandleClickSwitch} />
                <span className="slider"></span>
              </label>
            </div>
            <div id="display">
              {this.state.musicName}
            </div>
            <div className="slider-btn">
              <input type="range"></input>
            </div>
            <div className="bank-btn">
              <p>Bank</p>
              <label className="switch">
                <input type="checkbox" id="bank-switch" checked={this.state.bank} onChange={this.onHandleClickSwitch} />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <audio>
            <source src={this.state.audioSource}></source>
          </audio>
        </div>
      </div >
    );
  }
}

export default App;
