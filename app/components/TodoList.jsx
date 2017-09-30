var React = require('react');
var {connect} = require('react-redux');
//importing the connected version. 
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});


//connect redux store to individual components.
//TodoList can now request data it needs to conenct itself.
export default connect((state)=> {
  return {
    //specify part of state for this guy to have. in props.
    //you can return everything, or just todos.
    todos: state.todos,
    //...state
  };
})(TodoList);
//TodoList is connected to be provider.
