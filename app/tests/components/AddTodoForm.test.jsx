var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {AddTodoForm} = require('AddTodoForm');

describe('AddTodoForm', () => {
  it('should exist', () => {
    expect(AddTodoForm).toExist();
  });

  it ('should dispatch ADD_TODO when valid todo text', ()=> {
    var spy = expect.createSpy();
    var todoText= "check mail";
    var action= {
      type: 'ADD_TODO',
      text: todoText,
    };
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });


  it ('should not dispatch ADD_TODO when invalid todo text', ()=> {
      var spy = expect.createSpy();
      var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodoForm));

      addTodoForm.refs.todoText.value = "";
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });

});
