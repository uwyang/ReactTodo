var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
    }
  );

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23, text: 'test', completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      //to Equal only compares values.
      expect(actualTodos).toEqual(todos);
    });

    it('should NOT set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      //to Equal only compares values.
      expect(actualTodos).toBe(null);
    });

    describe('getTodos', ()=> {
      it('should return empty array for bad localStorage data', () => {
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual([]);
      });

      it('should return todos if valid arrays in localstorage', () => {
        var todos = [{
          id: 23, text: 'test', completed: false
        }];
        localStorage.setItem('todos', JSON.stringify(todos));
        var getTodos = TodoAPI.getTodos();
        expect(getTodos).toEqual(todos);
      })
    });

  });

  describe('getTodos', () => {

  });

})
