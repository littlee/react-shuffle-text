# React Shuffle Text

## Basic Usage
install:
```
npm install -S react-shuffle-text
```

render:
```js
import ShuffleText from 'react-shuffle-text';


// somewhere in render function
<ShuffleText content="Zhuangbility">

```

## Available Props
- content: PropTypes.string.isRequired
  - text wanted to display

- charIncInterval: PropTypes.number (default: 100)
  - character increasing time interval 

- charFrames: PropTypes.number (default: 10)
  - frame counts that each character plays

- charFrameTime: PropTypes.number (default: 50)
  - duration of each character frame

- more props are coming