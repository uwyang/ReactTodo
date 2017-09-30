var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

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

//provider: everything inside (i.e., TodoApp) will be able to
//access store, and dispatch etc.
ReactDOM.render(
  <Provider store = {store}>
    <TodoApp/>
  </Provider>, 
  document.getElementById('app')
);
