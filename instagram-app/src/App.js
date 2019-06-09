import React from 'react';
import './App.scss';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }

}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);


export default App;
