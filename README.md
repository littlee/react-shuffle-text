# React Shuffle Text

![Preview](https://github.com/littlee/react-shuffle-text/blob/master/demo/preview.gif?raw=true)

## Basic Usage
install:
```
npm install -S react-shuffle-text
```

render:
```js
import ShuffleText from 'react-shuffle-text';


// somewhere in render function
<ShuffleText content="Zhuangbility" />

```

custom styles & effects:
```css
/* write styles for .shuffle-text-char with higher specificity */
.my-shuffle .shuffle-text-char {
  animation: 0.5s ease-in-out both myWordEnter; /* none for no effect */
}

@keyframes myWordEnter {
  0% {
    opacity: 0;
    transform: translate(-100%, 0) scale(5);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}
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