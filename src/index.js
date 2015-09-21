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
		var classString = 'page-content ' + this.props.className;
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
