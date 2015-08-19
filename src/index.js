'use strict';

var React = require('react/addons');
var Velocity = require('velocity-animate');

var PageContainer = React.createClass({displayName: "PageContainer",
	getInitialState: function() {
		return { mounted: false };
	},
	componentDidMount: function() {
		var me = this;
		Velocity.hook(this.getDOMNode(), 'translateX', '100%');
		this.setState({ mounted: true });
		this.getDOMNode().style.display = 'block';

		Velocity(this.getDOMNode(),
			{
				translateX: 0
			},
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
