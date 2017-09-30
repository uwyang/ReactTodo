

var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');
var TodoAPI = require('TodoAPI');
var moment = require('moment');


var TodoApp = React.createClass({
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },

  getInitialState: function(){

    return {
      showCompleted: false,
      searchText: "",
      todos: [
      /*
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
        }*/
      ]
    }
  },

  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    console.log("render TodoApp", todos);
    return (
      <div>
        <h1 className='page-title'>Todo App</h1>
        <div className = 'row'>
          <div className="column small-centered small-11 medium-6 large=5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <p>Todo List: </p>
              <TodoList todos={filteredTodos}/>
              <AddTodoForm onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
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
          completed: false,
          createdAt: moment().unix(),
          compeletedAt: undefined,
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
});

module.exports=TodoApp;
