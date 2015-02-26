/* @flow */

var React = require('react');

var TodoItem = React.createClass({
  render: function(): any {
    return <li>{this.props.children}</li>;
  }
})

module.exports = TodoItem;
