import React, {Component} from 'react';

class SearchBar extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            key_word: ""
        };
    }


    render(){

        return(
            <input 
            value = {this.state.key_word}
            onChange = {event => this.onInputChange(event.target.value)} />
        );
    }

    onInputChange(value) {
        this.setState({key_word: value});
        this.props.searchChange(value);
    }
}

export default SearchBar;