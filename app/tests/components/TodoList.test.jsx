var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var {Provider} = require('react-redux');
import {configure} from 'configureStore';
import ConnectedTodo, {Todo} from 'Todo';
import ConnectedTodoList, {TodoList} from 'TodoList';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one component for each item', ()=> {
    var todos = [
      {
        id:1,
        text: 'task 1/2',
        completed: false,
        createdAt: 9009,
      },
      {
        id:2,
        text: 'task 2/2',
        completed: true,
        completedAt: 90,
      }
    ];

    var store = configure({
      todos,
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
