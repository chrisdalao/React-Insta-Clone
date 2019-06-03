import React from 'react';
import uuid from 'uuid';
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