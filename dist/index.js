'use strict';

var React = require('react/addons');
var Velocity = require('velocity-animate');

var PageContainer = React.createClass({displayName: "PageContainer",
	getInitialState: function() {
		return {
			mounted: false,
			startStyles: {
				'translateX': '100%'
			},
			endStyles: {
				'translateX': 0
			}
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
			child = (React.createElement("div", null, this.props.children));
		}
		return (
			React.createElement("section", {className: "page-content", style: {display: 'none'}},
				child
			)
		);
	}
});

module.exports = PageContainer;
