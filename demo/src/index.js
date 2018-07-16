import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
// import ShuffleText from 'react-shuffle-text';
import ShuffleText from '../../src/index';

class App extends React.Component {
  state = {
    text: ' '
  };

  render() {
    return (
      <div>
        <h1>{'<ShuffleText />'}</h1>
        <h1 className="my-shuffle">
          <ShuffleText
            content={this.state.text}
            charFrames={15}
            charFrameTime={50}
          />
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={this._changeText}>go</button>
      </div>
    );
  }

  _changeText = () => {
    this.setState({
      text: 'Zhuangbility leads to leipility'
    });
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
