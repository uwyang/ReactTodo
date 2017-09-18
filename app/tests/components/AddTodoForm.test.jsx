var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');
var AddTodoForm = require('AddTodoForm');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it ('should call onAddTodo Prop with valid data', ()=> {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = "check mail";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('check mail');
  });


  it ('should not call onAddTodo Prop with valid data', ()=> {
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));

      addTodoForm.refs.todoText.value = "";
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });

});
