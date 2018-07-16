import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import ShuffleText from 'react-shuffle-text';

class App extends React.Component {
  render() {
    return (
      <h1 className="my-shuffle">
        <ShuffleText content="Zhuangbility leads to leipility" />
      </h1>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
