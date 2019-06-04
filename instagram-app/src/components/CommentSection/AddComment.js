import React from 'react';
import './AddComment.scss';

const AddComment = props => {
    return (
        <form className="add-comment-form">
            <input placeholder="Add a comment..." />
        </form>
    )
}

export default AddComment;