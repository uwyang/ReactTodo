var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: uuid(),
          text: 'walk the dog',
          completed: false,
        },
        {
          id: uuid(),
          text: 'clean the yard',
          completed: true,
        },
        {
          id: uuid(),
          text: 'mow the lawn',
          completed: true,
        },
        {
          id: uuid(),
          text: 'brush up resume',
          completed: false,
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
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
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: text,
        completed: fase,
        }
      ]
    });
  },


  handleToggle: function(id){
    console.log("handleToggle TodoApp", id);
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      //forgetting this line costed me an hour.
      return todo;
    });

    this.setState({todos: updatedTodos});
  },

  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
});

module.exports=TodoApp;
