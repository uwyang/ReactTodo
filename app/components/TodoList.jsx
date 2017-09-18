var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    console.log("todos", todos); 
    var renderTodos = () => {
      return todos.map((todo) => {
        // ...: spread operator
        //spread into individual props.
        // as in, id -> id, text -. text etc .
        return <Todo key={todo.id} {...todo}/>
      });
    };
    return (
      <div>
        {renderTodos() }
      </div>
    );
  }
});

module.exports = TodoList;
