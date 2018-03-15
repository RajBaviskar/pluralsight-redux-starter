import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

     handleComplete() {
        this.props.actions.completeTodo(this.props.todo.id);
    }

     handleDelete() {
        this.props.actions.deleteTodo(this.props.todo.id);
    }

    render () {
        return (
            <li> 
                <div>{this.props.todo.text}</div>
                <button onClick={this.handleComplete}>Mark as completed</button>
                <button onClick={this.handleDelete}>Delete todo</button>
            </li>
        );
    }
}

export default TodoItem;