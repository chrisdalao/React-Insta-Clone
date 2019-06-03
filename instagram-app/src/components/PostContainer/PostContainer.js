import React from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';
import './PostContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../CommentSection/AddComment';

const PostContainer = props => {
    console.log(Date.now())
    return (
        <div className="post-container">
            {props.postData.map(post => {
                return (
                    <div className="post" key={uuid.v4()}>
                        <div className="post-top"><img className="post-userimg" src={post.thumbnailUrl} alt="" /><p className="post-username">{post.username}</p></div>
                        <div><img src={post.imageUrl} alt="" /></div>
                        <div className="post-bottom">
                            <div className="post-actions">
                                <FontAwesomeIcon className="action-icon" icon={faHeart} />
                                <FontAwesomeIcon className="action-icon" icon={faComment} />
                            </div>
                            <div className="post-likes">{post.likes} likes</div>
                            <CommentSection postComments={post.comments} />
                            <div> {post.timestamp} </div>
                            <AddComment />
                        </div>
                    </div>
                )
            })}
        </div>
    )

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
