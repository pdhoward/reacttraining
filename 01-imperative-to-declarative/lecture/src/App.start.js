import React from "react";
import createOscillator from "./lib/createOscillator";


/* this is a function of time not state -- imperative vs declarative
f(state) vs f(time) for example
declarative and composable -- coordinate behavior
ui is a function of state
*/
class App extends React.Component {
  oscillator = createOscillator();

  play = () => {
    this.oscillator.play();
  };

  stop = () => {
    this.oscillator.stop();
  };

  changeTone = event => {
    const { clientX, clientY } = event;
    const { top, right, bottom, left } = event.target.getBoundingClientRect();
    const pitch = (clientX - left) / (right - left);
    const volume = 1 - (clientY - top) / (bottom - top);
    this.oscillator.setPitchBend(pitch);
    this.oscillator.setVolume(volume);
  };

  render() {
    return (
      <div className="App">
        <div
          className="theremin"
          onMouseEnter={this.play}
          onMouseLeave={this.stop}
          onMouseMove={this.changeTone}
        />
        <div className="label pitch">◀︎ Pitch ▶︎</div>
        <div className="label volume">◀︎ Volume ▶︎</div>
      </div>
    );
  }
}

export default App;
