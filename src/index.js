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
			duration: 400
		};
	},
	componentWillMount: function () {
		if (this.props.startStyles) {
			this.setState({
				startStyles: this.props.startStyles
			});
		}
		if (this.props.endStyles) {
			this.setState({
				endStyles: this.props.endStyles
			});
		}
		if (this.props.easing) {
			this.setState({
				easing: this.props.easing
			});
		}
    		if (this.props.duration) {
      			this.setState({
        			duration: this.props.duration
      			});
    		}
	},
	componentDidMount: function() {
		var me = this;

		// Hook styles
		for (var key in this.state.startStyles) {
			Velocity.hook(this.getDOMNode(), key, this.state.startStyles[key]);
		}

		this.setState({ mounted: true });
		this.getDOMNode().style.display = 'block';

		Velocity(this.getDOMNode(),
			this.state.endStyles,
			this.state.easing,
			this.state.duration,
			{
				complete: function () {
					me.getDOMNode().classList.add('loaded-page');
				}
			}
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
