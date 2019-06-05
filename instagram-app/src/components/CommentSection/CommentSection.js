import React from 'react';
import uuid from 'uuid';
import moment from 'moment';
import PropTypes from 'prop-types';
import './CommentSection.scss';

class CommentSection extends React.Component {
    state = {
        comments: this.props.postComments,
        comment: ""
    }
    //onSubmit=addcomment - pass in post id and input value to props.addComment

    //add function

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'chrisdalao',
            text: this.state.comment
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            comment: ''
        })
        debugger
    }

    changeComment = e => (this.setState({ [e.target.name]: e.target.value }));

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map(comment => {
                    return (
                        <div className="comment" key={uuid.v4()}>
                            <div className="comment-username">{comment.username}</div>
                            <div className="comment-text">{comment.text}</div>
                        </div>
                    )
                })}
                <div className="post-date">{moment(this.props.postTimeStamp, "LLL").fromNow().toUpperCase()} </div>
                <form onSubmit={this.addNewComment} className="add-comment-form">
                    <input
                        type="text"
                        name="comment"
                        value={this.state.comment}
                        onChange={this.changeComment}
                        placeholder="Add a comment..."
                    />
                </form>
            </div>
        )
    }
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