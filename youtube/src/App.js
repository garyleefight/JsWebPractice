<<<<<<< HEAD
import React from 'react';
import SearchBar from './components/search_bar';

class App extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

const access_key = 'AIzaSyAQYwgJULiSfQqa5iIdm7hJKArjIVTUhng';
=======
import React,{Component} from 'react';
import SearchBar from './components/search_bar';
import Youtube from 'youtube-api-search';

const access_key = 'AIzaSyAQYwgJULiSfQqa5iIdm7hJKArjIVTUhng';
const keyWord = 'Barcelona'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    this.doSearch(keyWord);
  }
  render () {
    return (
      <div>
        <SearchBar videosList={this.state.videos}/>
      </div>
    );
  }
  doSearch(keyWord) {
    Youtube({key: access_key, keyWord: keyWord},videos => {
        console.log(videos);
        this.setState({
          videos:videos
        });
    });
  }
}



>>>>>>> add youtube

export default App;