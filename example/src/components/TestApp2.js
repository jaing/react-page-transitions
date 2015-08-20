'use strict';

var React = require('react/addons');
var PageContainer = require('react-page-transitions');
var Router = require('react-router');
var Link = require('react-router').Link;


var TestApp = React.createClass({
	render: function() {
		return (
			<PageContainer>
				<div className="content page-2">
					<h1>Page 2</h1>
					<Link to="TestApp">Go to prev page</Link>
				</div>
			</PageContainer>

		);
	}
});

module.exports = TestApp;
