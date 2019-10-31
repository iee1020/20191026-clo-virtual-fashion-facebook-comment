import { combineReducers } from "redux";
import getPostComment from "./getPostComment";
import putDeleteComment from "./putDeleteComment";

export default combineReducers({
  getPostComment,
  putDeleteComment
});
