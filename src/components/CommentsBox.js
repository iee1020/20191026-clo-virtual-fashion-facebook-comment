import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

class CommentsBox extends Component {
  state = {
    check: true,
    inputValue: ""
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  localSetItem = arrData => {
    localStorage.setItem("CLO", JSON.stringify(arrData));
  };

  componentDidUpdate() {
    if (this.state.check === false) {
      this.handleChange("check", true);
    }
  }

  render() {
    console.log(this.state.check);
    const get = localStorage.getItem("CLO");
    const { handleChange, localSetItem } = this;
    const { inputValue } = this.state;
    let mappingData = <div></div>;
    if (get !== null) {
      mappingData = JSON.parse(get).map((x, indx) => (
        <Comment
          key={x._id + indx}
          index={indx}
          dataProps={x}
          handleChange={handleChange}
          localSetItem={localSetItem}
        />
      ));
    }
    return (
      <div id="commentBox">
        {mappingData}
        <CommentForm
          inputValue={inputValue}
          handleChange={handleChange}
          localSetItem={localSetItem}
        />
      </div>
    );
  }
}

export default CommentsBox;
