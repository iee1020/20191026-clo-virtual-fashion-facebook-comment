import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import FormContainer from "./FormContainer";
import { connect } from "react-redux";

class BoxContainer extends Component {
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
      this.commentsMap();
    }
  }

  commentsMap = () => {
    const { localStorage } = this.props;
    const { handleChange, localSetItem } = this;

    let localData = <div></div>;

    if (localStorage !== null) {
      localData = localStorage.map((x, indx) => (
        <CommentContainer
          key={x._id + indx}
          index={indx}
          dataProps={x}
          handleChange={handleChange}
          localSetItem={localSetItem}
        />
      ));
    }
    return localData;
  };

  render() {
    const { handleChange, localSetItem, commentsMap } = this;
    const { inputValue } = this.state;
    return (
      <div id="commentBox">
        {commentsMap()}
        <FormContainer
          inputValue={inputValue}
          handleChange={handleChange}
          localSetItem={localSetItem}
        />
      </div>
    );
  }
}

export default connect(state => ({
  localStorage: state.getPostComment.localStorage
}))(BoxContainer);
