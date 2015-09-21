# react-page-transitions

[DEMO](http://jaing.github.io/react-page-transitions/)!

Page tranistions for ReactJS based on VelocityJS library. Mobile friendly. High performance.

![alt tag](http://i.imgur.com/jAELIYM.gif)

## Change log

1.2.0
- You can pass className along with other params

```js

	<PageContainer className="some-test-class">
	  <div>....</div>
	</PageContainer>

```
- Simplifying method responsible for passing props to component.

1.1.0
- Additional parameters easing and duration (kudos to @simon-johansson)
- Additional parameter callback. Fired when animation is completed.

## Getting Started

Install: `npm install react-page-transitions`

```js
var React = require('react/addons');
var PageContainer = require('react-page-transitions');

var PageTest = React.createClass({

	render: function () {
		return (
			<PageContainer>
			  <div>....</div>
			</PageContainer>
    );
  }
});

module.exports = PageTest;

```
### Params
You can use custom parameters to set start and end styles. In example:

```js

render: function () {
	var startStyles = {
            'opacity': 0,
            'scale': .5
        };

        var endStyles = {
            'opacity': 1,
            'scale': 1
        };
        
        var duration = 1000;
    	var easing = 'easeInExpo';
    	var callback = function() {
    		alert('Done');
    	};
        
	return (
		<PageContainer
		        startStyles={startStyles}
		        endStyles={endStyles}
		        duration={duration}
		        easing={easing}
		        callback={callback}
		      >
			<div>....</div>
		</PageContainer>
	);
}

module.exports = PageTest;

```

Velocity currently doesn't support multiple hooks in one call so what I'm doing is:
- Iterate through all keys and values in startStyles objects. Hook all of them.
- Start Velocity animate with endStyles.

Without this parameters it will just go with defaults (TranslateX from 100% to 0).


## Styles (CSS)
For mobile I suggest to use this so animation will be affecting whole page:

```js
render: function () {
	return (
		<PageContainer>
		  <div className="content">....</div>
		</PageContainer>
```

```css

body, .page-content, .content {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
}

// For webkit scroll touch
.loaded-page.content {
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	overflow-x: hidden;
}

```


## How its working?
Component renders with display none property. On componentDidMount I'm using Velocity hook to set translateX -100% to the container. Add child component. Set display block. Start VelocityJS animation to translateX 0. After that I'm also adding loaded-page class to container in case you want to use webkit scroll touch.

