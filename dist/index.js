'use strict';

var React = require('react/addons');
var Velocity = require('velocity-animate');

var PageContainer = React.createClass({displayName: 'PageContainer',
	getInitialState: function() {
		return {
			mounted: false,
			startStyles: {
				'translateX': '100%'
			},
			endStyles: {
				'translateX': 0
			},
			easing: 'swing',
			duration: 400,
			callback: function() {

			}
		};
	},
	componentWillMount: function () {
		this.setState(this.props);
	},
	componentDidMount: function() {
		var me = this;

		// Hook styles
		for (var key in this.state.startStyles) {
			Velocity.hook(this.getDOMNode(), key, this.state.startStyles[key]);
		}

		this.setState({ mounted: true });
		this.getDOMNode().style.display = 'block';

		var options = {
			duration: this.state.duration,
			easing: this.state.easing,
			complete: function () {
				me.getDOMNode().classList.add('loaded-page');
				me.state.callback();
			}
		};

		Velocity(this.getDOMNode(),
			this.state.endStyles,
			options
		);
	},
	render: function () {
		var child;
		if(this.state.mounted){
			child = (React.createElement('div', null, this.props.children));
		}
		return (
			React.createElement('section', {className: 'page-content ' + this.props.className, style: {display: 'none'}},
				child
			)
		);
	}
});

module.exports = PageContainer;
