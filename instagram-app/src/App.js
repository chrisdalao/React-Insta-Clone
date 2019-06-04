import dummyData from './dummy-data';
import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {

  state = {
    postData: [],
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer value={this.state.comment} postData={this.state.postData} />
      </div>
    );
  }

}

export default App;
