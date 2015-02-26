/* @flow */

var React = require('react');
var TodoStore = require('./TodoStore');

var TodoField = React.createClass({
  render(): any {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Start typing" ref="text" />
        <button type='submit'>Submit</button>
      </form>
    </div>;
  },
  // _Event
  handleSubmit(event: _Event): void {
    event.preventDefault();
    var id: number = event.currentTarget.getAttribute('data-id');
    var input = this.refs.text.getDOMNode();
    var value: string = input.value;

    if (!value) {
      throw new Error('Please enter some text');
    }

    TodoStore.insert({
      id: TodoStore.getNextId() + '',
      text: value
    });

    input.value = '';
  }
});

module.exports = TodoField;
