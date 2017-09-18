var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');
var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', ()=> {
    var searchText = "dog";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);

  });


    it('should call onSearch with entered input text 2', ()=> {
      var searchText = "dog";
      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

      todoSearch.refs.showCompleted.checked = true,
      todoSearch.refs.searchText.value = searchText;
      TestUtils.Simulate.change(todoSearch.refs.searchText);

      expect(spy).toHaveBeenCalledWith(true, searchText);
  });

});
