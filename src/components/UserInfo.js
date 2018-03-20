import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.handleNewId = this.handleNewId.bind(this);
        this.handleNewIdIfOdd = this.handleNewIdIfOdd.bind(this);
        this.handleNewUserIdAsync = this.handleNewUserIdAsync.bind(this);
    }

    handleNewId(){
        //dispatch an action
        this.props.actions.createNewUserId();
    }

    handleNewIdIfOdd () {
        this.props.actions.createNewUserIdIfOdd();
    }

    handleNewUserIdAsync () {
        this.props.actions.createNewUserIdAync();
    }

    render() {
        return (
            <li>
                <div> username: {this.props.user.username} </div>
                <div> id: {this.props.user.id}</div>
                <button onClick={this.handleNewId}>Update with random Id</button>
                <button onClick={this.handleNewIdIfOdd}>Update only if odd</button>
                <button onClick={this.handleNewUserIdAsync}> update Async</button>
            </li>
        );
    }
}

export default UserInfo;