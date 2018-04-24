import React, {Component} from 'react';

class SearchBar extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const {videoList} = this.props;
        return(
            <div>
                {videoList}
            </div>
        );
    }
}

export default SearchBar;