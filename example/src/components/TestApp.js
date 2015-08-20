'use strict';

var React = require('react/addons');
var PageContainer = require('react-page-transitions');
var Router = require('react-router');
var Link = require('react-router').Link;

// CSS
require('normalize.css');
require('../styles/main.css');

var TestApp = React.createClass({
  render: function() {
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
        <div className="content page-1">
          <h1>Page 1</h1>
          <Link to="TestApp2">Go to next page</Link>
        </div>
      </PageContainer>

    );
  }
});

module.exports = TestApp;
