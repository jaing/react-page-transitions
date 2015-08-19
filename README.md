# react-page-transitions
Page tranistions for ReactJS based on VelocityJS library. Mobile friendly. High performance.

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

## How its working?
Component renders with display none property. On componentDidMount I'm using Velocity hook to set translateX -100% to the container. Add child component. Set display block. Start VelocityJS animation to translateX 0. After that I'm also adding loaded-page class to container in case you want to use webkit scroll touch.

## Info
Currently module is supporting only one animation. From translateX 100% to translateX 0. If you want to change it feel free to edit index.js file. All Velocity methods will be working fine. 
