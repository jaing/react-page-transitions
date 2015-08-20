# react-page-transitions
Page tranistions for ReactJS based on VelocityJS library. Mobile friendly. High performance.

![alt tag](http://i.imgur.com/jAELIYM.gif)

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
	return (
		<PageContainer startStyles={startStyles} endStyles={endStyles}>
		  <div>....</div>
		</PageContainer>
);
}

module.exports = PageTest;

```

Velocity currently doesn't support multiple hooks in one call so what I'm doing is:
- iterate through all keys and values in startStyles objects. Hook all of them.
- Start Velocity animate with endStyles.
- 
Without this parameters it will just go with defaults (TranslateX from 100% to 0).


## Styles (CSS)
For mobile I suggest to use this so animation will be affecting whole page:

```js
render: function () {
	return (
		<PageContainer className="page-content">
		  <div>....</div>
		</PageContainer>
```

```css

.page-content {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
}

// For webkit scroll touch
.loaded-page.page-content {
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	overflow-x: hidden;
}

```


## How its working?
Component renders with display none property. On componentDidMount I'm using Velocity hook to set translateX -100% to the container. Add child component. Set display block. Start VelocityJS animation to translateX 0. After that I'm also adding loaded-page class to container in case you want to use webkit scroll touch.

