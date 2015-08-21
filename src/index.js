'use strict';

var React = require('react/addons');
var Velocity = require('velocity-animate');

var PageContainer = React.createClass({
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
		var obj = {};
		if (this.props.startStyles) {
			obj.startStyles = this.props.startStyles;
		}
		if (this.props.endStyles) {
			obj.endStyles = this.props.endStyles;
		}
		if (this.props.easing) {
			obj.easing = this.props.easing;
		}
		if (this.props.duration) {
			obj.duration = this.props.duration;
		}
		if (typeof this.props.callback === 'function') {
			obj.callback = this.props.callback;
		}
		this.setState(obj);
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
			child = (<div>{this.props.children}</div>);
		}
		return (
			<section className="page-content" style={{display: 'none'}}>
				{child}
			</section>
		);
	}
});

module.exports = PageContainer;
