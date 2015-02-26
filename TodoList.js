/* @flow */

var React = require('react');

var TodoList = React.createClass({
  render: function(): any {
    return <ul>
      {this.props.children}
    </ul>;
  }
});

module.exports = TodoList;
