import React, { Component } from "react";

class Comment extends Component {
  deleteComment = e => {
    console.log(e.target.value);
    const { value } = e.target;
    const { localSetItem, handleChange } = this.props;
    let getC = JSON.parse(localStorage.getItem("CLO"));
    getC.splice(value, 1);
    localSetItem(getC);
    handleChange("check", false);
  };

  render() {
    const { username, comment, time, img, good } = this.props.dataProps;
    const { index } = this.props;
    const { deleteComment } = this;
    console.log(good);
    let goodCount = good === 0 || good === undefined ? "inline-block" : "none";
    // let marginNum = 0;
    let styleObj = {
      display: goodCount
    };
    return (
      <div id="comment">
        <div id="form">
          <img className="proCircle" src={img} alt="logo" />
          <div className="commentText">
            <span className="userName">{username}</span>
            {comment}
            <span className="goodCount" style={styleObj}>
              {good}
            </span>
          </div>
          <button className="deleteBtn" value={index} onClick={deleteComment}>
            ×
          </button>
        </div>
        <div className="gAndT">
          <button className="goodBtn">좋아요</button>
          <span className="time"> · {time}</span>
        </div>
      </div>
    );
  }
}

export default Comment;
