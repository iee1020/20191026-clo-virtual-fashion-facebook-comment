import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentsBox extends Component {
  render() {
    return (
      <div id="commentBox">
        <Comment />
        <CommentForm />
      </div>
    );
  }
}

export default CommentsBox;
