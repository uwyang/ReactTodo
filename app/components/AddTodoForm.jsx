var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodoForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {todoText} = this.refs;
    var {dispatch} = this.props;
    if (todoText.value.length >0){
        dispatch(actions.addTodo(todoText.value));
    }else{
      this.refs.todoText.focus();
    }

  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.handleSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="add todo entry"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodoForm);
