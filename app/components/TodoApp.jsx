var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: 1,
          text: 'walk the dog',
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'mow the lawn'
        },
        {
          id: 4,
          text: 'brush up resume'
        }
      ]
    }
  },

  render: function(){
    var {todos} = this.state;
    console.log("render TodoApp", todos);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <p>Todo List: </p>
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  },

  //passes text of new todo item.
  handleAddTodo: function(text){
    /*
    var timestamp = (new Date()).getTime();
    var newState = this.state.todos.slice().push(
      {id: timestamp, text: text}
    );
    this.setState({todos: newState});
    */
    console.log("handleAddTodo: ",  text);
  },

  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
});

module.exports=TodoApp;
