import React from 'react';
import PropTypes from 'prop-types';
import Char from './Char';
import './index.css';

class ShuffleText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };

    this._pushCharTimer = null;
  }

  componentDidMount() {
    this._pushCharTimer = setInterval(
      this._pushChar,
      this.props.charIncInterval
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState(
        {
          content: []
        },
        () => {
          clearInterval(this._pushCharTimer);
          this._pushCharTimer = setInterval(
            this._pushChar,
            this.props.charIncInterval
          );
        }
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this._pushCharTimer);
  }

  render() {
    const { content } = this.state;

    const { content: propContent, charFrames, charFrameTime } = this.props;

    if (!propContent || !propContent.length) {
      return null;
    }

    return (
      <span className="shuffle-text">
        {content.map((char, index) => (
          <Char
            key={index + char}
            char={char === ' ' ? '\u00a0' : char}
            frames={charFrames}
            frameTime={charFrameTime}
          />
        ))}
      </span>
    );
  }

  _pushChar = () => {
    if (this.state.content.length >= this.props.content.length) {
      clearInterval(this._pushCharTimer);
      return;
    }

    this.setState(prevState => {
      const { content: propContent } = this.props;
      const prevContent = prevState.content;
      const prevLen = prevContent.length;

      return {
        content: prevContent.concat(propContent.slice(prevLen, prevLen + 1))
      };
    });
  };
}

ShuffleText.defaultProps = {
  content: '',
  charIncInterval: 100,
  charFrames: 15,
  charFrameTime: 50
};

ShuffleText.propTypes = {
  content: PropTypes.string.isRequired,
  charIncInterval: PropTypes.number,
  charFrames: PropTypes.number,
  charFrameTime: PropTypes.number
};

export default ShuffleText;
