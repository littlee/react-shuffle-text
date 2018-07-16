import React from 'react';
import PropTypes from 'prop-types';
import { genRandomChars } from './utils';

class Char extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      chars: genRandomChars(props.char, props.frames)
    };
    this._indexTimer = null;
  }

  componentDidMount() {
    this._indexTimer = setInterval(this._incIndex, this.props.frameTime);
  }

  componentWillUnmount() {
    clearInterval(this._indexTimer);
  }

  render() {
    const { index, chars } = this.state;

    return <span className="shuffle-text-char">{chars[index]}</span>;
  }

  _incIndex = () => {
    if (this.state.index >= this.state.chars.length - 1) {
      clearInterval(this._indexTimer);
      return;
    }
    this.setState(prevState => {
      return {
        index: prevState.index + 1
      };
    });
  };
}

Char.propTypes = {
  frames: PropTypes.number,
  frameTime: PropTypes.number
};

export default Char;
