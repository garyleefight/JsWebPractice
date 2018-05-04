import _ from "lodash";
import React,{Component} from 'react';
import SearchBar from './components/search_bar';
import Youtube from 'youtube-api-search';
import VideoList from './components/video_list';

const access_key = 'AIzaSyAQYwgJULiSfQqa5iIdm7hJKArjIVTUhng';
const key_word = 'Barcelona'
var count = 0;
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      myvideos: []
    };
    this.doSearch(key_word);
  }

  doSearch(keyWord) {
    console.log(count++);
    Youtube({key: access_key, term: keyWord},videos => {
        this.setState({
          myvideos: videos
        });
    });
  }

  render () {
    count += 1;
    console.log(count);
    const doSearch = _.debounce(term => {
      this.doSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar searchChange={doSearch} />
        <VideoList videos={this.state.myvideos}/>
      </div>
    );
  }
}




export default App;