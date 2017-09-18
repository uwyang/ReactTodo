var React = require('react');

var AddTodoForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {text} = this.refs;
    this.props.onAddTodo(text.value);

  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="text" placeholder="add todo entry"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodoForm;
