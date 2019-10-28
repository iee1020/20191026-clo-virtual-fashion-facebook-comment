import React, { Component } from "react";

const IMG =
  "https://image.rocketpunch.com/company/7944/clovirtualfashion_logo_1486533344.jpg?s=400x400&t=inside";

class Comment extends Component {
  render() {
    return (
      <div id="comment">
        <div id="form">
          <img className="proCircle" src={IMG} alt="logo" />
          <div className="commentText">
            <span className="userName">CLO</span>
            Jaden, a Ph.D. student of Computer Science, has a passion for cloth
            simulation technology. He develops the first prototype at school and
            is thrilled to see students having fun creating 3D garments with the
            program. Seeing how fun the program can be, Jaden decides to make it
            public so more people can enjoy it.
          </div>
          <button className="deleteBtn">×</button>
        </div>
        <div className="gAndT">
          <button className="goodBtn">좋아요</button>
          <span className="time"> · 15시간</span>
        </div>
      </div>
    );
  }
}

export default Comment;
