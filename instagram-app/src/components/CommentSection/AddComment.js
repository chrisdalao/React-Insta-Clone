import React from 'react';
import './AddComment.scss';

const AddComment = props => {
    return (
        <form className="add-comment-form">
            <input
                type="text"
                name="comment"
                value={props.value}
                onChange={props.handleCommentChange}
                placeholder="Add a comment..."
            />
        </form>
    )
}

export default AddComment;