import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted} onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>&nbsp;&nbsp;
        <button onClick={ this.props.deleteTodo }>Delete Item</button>
      </li>
    );
  }
}

export default ToDo;
