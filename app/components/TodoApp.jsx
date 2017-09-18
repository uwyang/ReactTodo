var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
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
    return (
      <div>
        <p>Todo List: </p>
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  },

  //passes text of new todo item.
  handleAddTodo: function(text){
    var timestamp = (new Date()).getTime();
    this.state.todos.push(
      {id: timestamp, text: text}
    );
    console.log(this.state.todos);
  }
});

module.exports=TodoApp;
