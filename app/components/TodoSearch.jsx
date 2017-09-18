var React = require('react');

var TodoSearch = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          Show Completed Todos
        </div>
      </div>
    );
  },

  handleSearch: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }
});

module.exports = TodoSearch;
