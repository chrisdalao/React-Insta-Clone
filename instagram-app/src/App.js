import dummyData from './dummy-data';
import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {

  state = {
    postData: [],
    filteredPosts: []
  };

  componentDidMount() {
    this.setState({
      postData: dummyData,
    });
  }

  searchFilter = e => {
    const filtered = this.state.postData.filter(post => post.username.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ filteredPosts: filtered })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchFilter={this.searchFilter} />
        <PostContainer filteredPosts={this.state.filteredPosts} postData={this.state.postData} />
      </div>
    );
  }

}

export default App;
