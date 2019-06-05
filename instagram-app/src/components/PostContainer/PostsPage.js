import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


class PostsPage extends React.Component {
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
            <div>
                <SearchBar searchFilter={this.searchFilter} />
                <PostContainer filteredPosts={this.state.filteredPosts} postData={this.state.postData} />
            </div>
        )
    }
}

export default PostsPage
