var expect = require('expect');
//deep freeze: make sure the state is not changed. 
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('reducers', () => {
  it('should set searchText', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      text: 'dog',
    };
    var res =reducers.searchTextReducer(df(''), df(action));

    expect(res).toEqual(action.searchText);
  });

  it('should toggle show completed Todos', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var res =reducers.toggleShowCompletedReducer(df(false), df(action));

    expect(res).toEqual(true);
  });
});
