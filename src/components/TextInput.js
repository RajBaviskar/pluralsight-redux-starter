import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: 'initial Text'
        };

        this.handleTextChange = this.handleTextChange.bind(this);
    }

    // getInitialState() {
    //     return {
    //         inputText: 'initial text'
    //     };
    // }

    handleTextChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }


    render () {
        return (
        <div>
            <input 
                type = "text"
                placeholder="This is going to be text"
                value={this.state.inputText}
                onChange={this.handleTextChange}
            />
            <TextDisplay text={this.state.inputText}/>
        </div>
        ); 
    }
}

export default TextInput;