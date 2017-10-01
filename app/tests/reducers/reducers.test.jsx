var expect = require('expect');
//deep freeze: make sure the state is not changed.
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        text: 'dog',
      };
      var res =reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('toggleShowCompletedReducer ', () => {
    it('should toggle show completed Todos', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res =reducers.toggleShowCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
      it('should add new todo', () => {
        var action = {
          type: 'ADD_TODO',
          text: 'mowing the lawn'
        };
        var res =reducers.todosReducer(df([]), df(action));

        expect(res[0].text).toEqual(action.text);
      });

      it('should toggle ocmpleted', () => {
        var action = {
          type: 'TOGGLE_TODO',
          id: 1,
        };
        var res =reducers.todosReducer([
          {
            id: 1,
            text: 'test toggle completed',
            completed: true,
            completedAt: 234,
          }
        ], df(action));

        expect(res[0].completed).toEqual(false);
        expect(res[0].completedAt).toEqual(undefined);
      });

      it ('should add existing todos', () => {
        var todos = [{
          id: 111,
          text: 'first stuff',
          completed: false,
          completedAt: undefined,
          createdAt: 2930,
        }];
        var action = {
          type: 'ADD_TODOS',
          todos,
        };

        var res = reducers.todosReducer(
          df([]), df(action),
        );
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(todos[0]);

      });

  });

});
