import React, {Component} from 'react';

class SearchBar extends Component{
<<<<<<< HEAD
    render(){
        return(
            <div>
                abcdefg
=======
    
    constructor(props){
        super(props);
    }

    render(){
        const {videoList} = this.props;
        return(
            <div>
                {videoList}
>>>>>>> add youtube
            </div>
        );
    }
}

export default SearchBar;