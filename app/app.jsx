var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
//returns store.
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo("clean the room"));
store.dispatch(actions.setSearchText("clean"));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
