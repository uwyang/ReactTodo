var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it ('should add todo to the todos state on handleTodo', ()=> {
    var todoText = "test add todo";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText) ;
  });

  it ('should toggle completed value when handleToggle is called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    //check todo's first item is false
    //call handle toggle
    //verify value change.
    expect(todoApp.state.todos[0].completed).toBe(false);
    //var $el = $(ReactDOM.findDOMNode(todoApp));
    //TestUtils.Simulate.onClick.($el.find()[0]);
    todoApp.handleToggle(11);
     expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
