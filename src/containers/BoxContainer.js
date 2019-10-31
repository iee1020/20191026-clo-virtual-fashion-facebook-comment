import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import FormContainer from "./FormContainer";
import { connect } from "react-redux";

class BoxContainer extends Component {
  state = {
    check: true
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

  commentsMap = () => {
    const { localStorage } = this.props;
    const { handleChange, localSetItem } = this;

    let localData = <div></div>;
    console.log(localStorage);

    if (localStorage !== null) {
      localData = localStorage
        .toArray()
        .map((x, indx) => (
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
    return (
      <div id="commentBox">
        {commentsMap()}
        <FormContainer
          handleChange={handleChange}
          localSetItem={localSetItem}
        />
      </div>
    );
  }
}

export default connect(({ getPostComment }) => ({
  localStorage: getPostComment.get("localStorage")
}))(BoxContainer);
