import React, { Component } from "react";
import BoxContainer from "../containers/BoxContainer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="all">
        <div id="header">댓글</div>
        <BoxContainer />
      </div>
    );
  }
}

export default App;
