import React from 'react';
import TextInput from './TextInput';

//class App extends Component {
var App = React.createClass({
    render(){
        return( 
        <div> 
            <div>This is a App Component</div>
            <TextInput/>
        </div>
        );
    }
});

export default App;