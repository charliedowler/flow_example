/* @flow */

var React = require('react');
var TodoList = require('./TodoList');
var TodoItem = require('./TodoItem');
var TodoField = require('./TodoField');
var TodoStore = require('./TodoStore');

TodoStore.insert({
  id: TodoStore.getNextId(),
  text: 'Hello'
});

TodoStore.insert({
  id: TodoStore.getNextId(),
  text: 'World'
});

var TodoComponent = React.createClass({
  componentWillMount: function() {
    TodoStore.addChangeListener(this._forceUpdate);
  },
  _forceUpdate: function() {
    this.forceUpdate();
  },
  render: function() {

    var values: number = TodoStore.getTodos();

    return <div>
      <TodoList>
      {TodoStore.getTodos().map((todo) => {
        return <TodoItem key={todo.id}>{todo.text} <input type="checkbox" /></TodoItem>
      })}
      </TodoList>
      <TodoField />
    </div>;
  }
});

React.render(<TodoComponent />, document.getElementById('content'));
