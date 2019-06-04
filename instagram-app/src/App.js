import dummyData from './dummy-data';
import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {

  state = {
    postData: [],
    comment: ''
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }

  changeComment = e => (this.setState({ [e.target.name]: e.target.value }));

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer value={this.state.comment} handleCommentChange={this.changeComment} postData={this.state.postData} />
      </div>
    );
  }

}

export default App;
