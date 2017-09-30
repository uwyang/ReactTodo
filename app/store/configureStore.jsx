var redux = require('redux');
//var thunk = require('redux-thunk').default;

var {searchTextReducer, toggleShowCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    toggleShowCompleted: toggleShowCompletedReducer,
    todos: todosReducer,
  });

  var store = redux.createStore(reducer, redux.compose(
    //redux.applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;

};
