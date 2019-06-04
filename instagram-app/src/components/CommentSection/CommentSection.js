import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import PropTypes from 'prop-types';
import './CommentSection.scss';

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.postComments.map(comment => {
                return (
                    <div className="comment" key={uuid.v4()}>
                        <div className="comment-username">{comment.username}</div>
                        <div className="comment-text">{comment.text}</div>
                    </div>
                )
            })}
            <div className="post-date">{moment(props.postTimeStamp, "LLL").fromNow().toUpperCase()} </div>
            <form className="add-comment-form">
                <input
                    type="text"
                    value={props.value}
                    onChange={props.handleCommentChange}
                    placeholder="Add a comment..."
                />
            </form>
        </div>
    )
}

CommentSection.propTypes = {
    postComments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default CommentSection;