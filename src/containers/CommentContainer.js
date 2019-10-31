import React, { Component } from "react";
import { connect } from "react-redux";
import * as CrudActions from "../store/modules/crudComment";

class CommentContainer extends Component {
  goodCountStyle = good => {
    let goodCount = good === 0 || good === undefined ? "none" : "inline-block";
    let styleObj = {
      display: goodCount
    };
    return styleObj;
  };

  goodClickChange = click => {
    const { increment, decrement, index } = this.props;
    if (click === false) {
      increment(index);
    } else {
      decrement(index);
    }
  };

  render() {
    const { goodClickChange, goodCountStyle } = this;
    const { index, deleteComment } = this.props;
    const { username, comment, time, img, good, click } = this.props.dataProps;

    return (
      <div id="comment">
        <div id="form">
          <img className="proCircle" src={img} alt="logo" />
          <div className="commentText">
            <span className="userName">{username}</span>
            {comment}
            <span className="goodCount" style={goodCountStyle(good)}>
              {good}
            </span>
          </div>
          <button
            className="deleteBtn"
            value={index}
            onClick={() => deleteComment(index)}
          >
            ×
          </button>
        </div>
        <div className="gAndT">
          <button
            className="goodBtn"
            onClick={() => goodClickChange(click)}
            style={click === true ? { fontWeight: "bold" } : {}}
          >
            좋아요
          </button>
          <span className="time"> · {time}</span>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    increment: indx => dispatch(CrudActions.increment(indx)),
    decrement: indx => dispatch(CrudActions.decrement(indx)),
    deleteComment: indx => dispatch(CrudActions.deleteComment(indx))
  })
)(CommentContainer);
