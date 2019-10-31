import React, { Component } from "react";

const IMG_URL =
  "https://image.rocketpunch.com/company/7944/clovirtualfashion_logo_1486533344.jpg?s=400x400&t=inside";
const enterStr = "글을 게시하려면 Enter 키를 누르세요.";
const inputText = "댓글을 입력하세요...";

class FormContainer extends Component {
  state = {
    profile: IMG_URL
  };

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
      const { handleChange, inputValue, localSetItem } = this.props;
      let getData = localStorage.getItem("CLO");
      let data = {
        _id: 0,
        img: IMG_URL,
        username: "CLO",
        comment: inputValue,
        time: this.currDate(),
        good: 0
      };

      if (getData === null) {
        localSetItem([data]);
      } else if (getData !== null) {
        let afterData = JSON.parse(getData);
        let num = afterData.length;
        data._id = num;
        afterData[num] = data;
        localSetItem(afterData);
      }
      // console.log(localStorage.getItem("CLO"));
      handleChange("inputValue", "");
      handleChange("check", false);
    }
  };

  render() {
    const { profile } = this.state;
    const { keyPress } = this;
    const { handleChange, inputValue } = this.props;
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

export default FormContainer;
