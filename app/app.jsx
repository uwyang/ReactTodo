var React = require('react');
var ReactDOM = require('react-dom');


//require('style!css!foundation-sites/dist/foundation.min.css')

$(document).foundation();

require('style!css!sass!applicationStyles');

var {Route, Router, IndexRoute, hashHistory}=require('react-router');


ReactDOM.render(
  <p>react Boilerplate</p>, 
  document.getElementById('app')
);
