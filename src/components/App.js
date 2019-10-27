import React, { Component } from "react";
import CommentsBox from "./CommentsBox";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="all">
        <div id="header">댓글</div>
        <CommentsBox />
      </div>
    );
  }
}

export default App;
