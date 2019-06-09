import React from 'react'
import PropTypes from 'prop-types';
import './PostContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
    state = {
        likes: null
    }

    render() {
        return (
            <div className="post-container">
                {this.props.filteredPosts.length === 0 ? this.props.postData.map(post => {
                    const addNewLike = e => {
                        e.preventDefault();
                        this.setState({
                            likes: post.likes += 1
                        })
                    }
                    return (
                        <div className="post" key={post.id}>
                            <div className="post-top"><img className="post-userimg" src={post.thumbnailUrl} alt="" /><p className="post-username">{post.username}</p></div>
                            <div><img src={post.imageUrl} alt="" /></div>
                            <div className="post-bottom">
                                <div className="post-actions">
                                    <FontAwesomeIcon onClick={addNewLike} className="action-icon like" icon={faHeart} />
                                    <FontAwesomeIcon className="action-icon comment" icon={faComment} />
                                </div>
                                <div className="post-likes">{post.likes} likes</div>
                                <CommentSection
                                    postLikes={post.likes}
                                    postTimeStamp={post.timestamp}
                                    postComments={post.comments}
                                />
                            </div>
                        </div>
                    )
                }) : this.props.filteredPosts.map(post => {
                    const addNewLike = e => {
                        e.preventDefault();
                        this.setState({
                            likes: post.likes += 1
                        })
                    }
                    return (
                        <div className="post" key={post.id}>
                            <div className="post-top"><img className="post-userimg" src={post.thumbnailUrl} alt="" /><p className="post-username">{post.username}</p></div>
                            <div><img src={post.imageUrl} alt="" /></div>
                            <div className="post-bottom">
                                <div className="post-actions">
                                    <FontAwesomeIcon onClick={addNewLike} className="action-icon like" icon={faHeart} />
                                    <FontAwesomeIcon className="action-icon comment" icon={faComment} />
                                </div>
                                <div className="post-likes">{post.likes} likes</div>
                                <CommentSection
                                    postLikes={post.likes}
                                    postTimeStamp={post.timestamp}
                                    postComments={post.comments}
                                />
                            </div>
                        </div>
                    )
                })
                }
            </div >
        )
    }

}


PostContainer.propTypes = {
    postData: PropTypes.arrayOf(
        PropTypes.shape({
            thumbnailUrl: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired
        })
    )
}

export default PostContainer
