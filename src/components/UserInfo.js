import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.handleNewId = this.handleNewId.bind(this);
    }

    handleNewId(){
        //dispatch an action
        this.props.createNewUserId();
    }

    render() {
        return (
            <li>
                <div> username: {this.props.user.username} </div>
                <div> id: {this.props.user.id}</div>
                <button onClick={this.handleNewId}>Update with random Id</button>
            </li>
        );
    }
}

export default UserInfo;