import React, { Component } from 'react';

class TodoInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleTextChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.inputText);
    }


    render () {
        return (
        <div>
            <form onSubmit= {this.handleSubmit}>
            <input 
                type = "text"
                placeholder="Add todo here"
                value={this.state.inputText}
                onChange={this.handleTextChange}
            />
            <input type="submit" text="Submit"/>
            </form>
        </div>
        ); 
    }
}

export default TodoInput;