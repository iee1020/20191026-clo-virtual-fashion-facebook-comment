import React, { Component } from "react";
import { connect } from "react-redux";
import * as getPostAction from "../store/modules/getPostComment";
const enterStr = "글을 게시하려면 Enter 키를 누르세요.";
const inputText = "댓글을 입력하세요...";

class FormContainer extends Component {
  currDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return year + "." + month + "." + day + " " + hours + ":" + minutes;
  };

  keyPress = event => {
    if (event.keyCode === 13) {
      const { postComment, changeInput } = this.props;
      postComment({ time: this.currDate() });
      changeInput("");
    }
  };

  render() {
    const { keyPress } = this;
    const { inputValue, changeInput, profile } = this.props;
    return (
      <div>
        <div id="form">
          <img className="proCircle" src={profile} alt="logo" />
          <input
            id="input"
            value={inputValue}
            onKeyDown={e => keyPress(e)}
            onChange={e => changeInput(e.target.value)}
            placeholder={inputText}
          />
        </div>
        <div id="enterStr">{enterStr}</div>
      </div>
    );
  }
}

export default connect(
  ({ getPostComment }) => ({
    inputValue: getPostComment.get("inputValue"),
    localStorage: getPostComment.get("localStorage"),
    profile: getPostComment.get("profile")
  }),
  dispatch => ({
    changeInput: char => dispatch(getPostAction.changeInput(char)),
    postComment: obj => dispatch(getPostAction.postComment(obj))
  })
)(FormContainer);
