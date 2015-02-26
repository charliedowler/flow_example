/* @flow */

type Todo = {
  id: number;
  text: string;
}


var _todos: Array<Todo> = [];

var TodoStore = function() {};

var onChange: Array<Function> = [];

TodoStore.prototype.onChange = onChange;

TodoStore.prototype.getTodos = function(): Array<Todo> {
  return _todos;
}

TodoStore.prototype.getNextId = function(): number {
  if (!_todos.length) {
    return 0;
  }
  return _todos[_todos.length - 1].id + 1;
}

TodoStore.prototype.addChangeListener = function(callback: Function) {
  this.onChange.push(callback);
};

TodoStore.prototype.insert = function(todo: Todo) {
  _todos.push(todo);
  this.onChange.forEach(cb => cb());
};

module.exports = new TodoStore();
