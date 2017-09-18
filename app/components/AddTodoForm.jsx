var React = require('react');

var AddTodoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {todoText} = this.refs;
    if (todoText.value.length >0){
        this.props.onAddTodo(todoText.value);
    }else{
      this.refs.todoText.focus();
    }
 
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="add todo entry"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodoForm;
