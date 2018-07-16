import ReactDOM from 'react-dom';
import React from 'react';

import ShuffleText from 'react-shuffle-text';

class App extends React.Component {
  render() {
    return (
      <h1>
        <ShuffleText content="Shuffle Text Demo" />
      </h1>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
