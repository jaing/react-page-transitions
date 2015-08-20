'use strict';

var TestApp = require('./TestApp');
var TestApp2 = require('./TestApp2');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route>
    <Route name="TestApp" path="/" handler={TestApp}/>
    <Route name="TestApp2" path="/test2" handler={TestApp2}></Route>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
