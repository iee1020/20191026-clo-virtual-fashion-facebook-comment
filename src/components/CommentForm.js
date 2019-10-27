import React, { Component } from "react";

const IMG_URL =
  "https://image.rocketpunch.com/company/7944/clovirtualfashion_logo_1486533344.jpg?s=400x400&t=inside";
const enterStr = "글을 게시하려면 Enter 키를 누르세요.";
const inputText = "댓글을 입력하세요...";

class CommentForm extends Component {
  state = {
    inputValue: "",
    profile: IMG_URL
  };

  // componentDidUpdate() {

  // }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  keyPress = event => {
    if (event.key === "Enter") {
      this.handleChange("inputValue", "");
    }
  };

  render() {
    const { inputValue, profile } = this.state;
    const { handleChange, keyPress } = this;
    console.log(inputValue);
    return (
      <div>
        <div id="form">
          <img className="proCircle" src={profile} alt="logo" />
          <input
            id="input"
            value={inputValue}
            onKeyDown={keyPress}
            onChange={e => handleChange("inputValue", e.target.value)}
            placeholder={inputText}
          />
        </div>
        <div id="enterStr">{enterStr}</div>
      </div>
    );
  }
}

export default CommentForm;
