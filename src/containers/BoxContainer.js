import React, { Component } from "react";
import CommentContainer from "./CommentContainer";
import FormContainer from "./FormContainer";
import { connect } from "react-redux";

class BoxContainer extends Component {
  commentsMap = () => {
    const { localStorage } = this.props;
    let localData = <div></div>;
    if (localStorage !== null) {
      localData = localStorage
        .toArray()
        .map((x, indx) => (
          <CommentContainer key={x._id + indx} index={indx} dataProps={x} />
        ));
    }
    return localData;
  };

  render() {
    const { commentsMap } = this;
    return (
      <div id="commentBox">
        {commentsMap()}
        <FormContainer />
      </div>
    );
  }
}

export default connect(({ crudComment }) => ({
  localStorage: crudComment.get("localStorage")
}))(BoxContainer);
