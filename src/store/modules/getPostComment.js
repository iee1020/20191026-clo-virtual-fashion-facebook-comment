import { createAction, handleActions } from "redux-actions";

// action types
const GET_COMMENT = "getComment/GET_COMMENT";
const POST_COMMENT = "postComment/POST_COMMENT";
const CHANGE_INPUT = "postComment/CHANGE+INPUT";

// action creator fns
export const getComments = createAction(GET_COMMENT);
export const postComment = createAction(POST_COMMENT);
export const changeInput = createAction(CHANGE_INPUT);

// pure function
const initialState = {
  localStorage: JSON.parse(localStorage.getItem("CLO")),
  click: false,
  indx: 0,
  goodNum: 0
};

export default handleActions(
  {
    [GET_COMMENT]: state => state.localStorage,
    [POST_COMMENT]: (state, action) => {
      console.log(state, action);
      //   Object.assign({}, state, { click: true, indx: action.indx });
    },
    [CHANGE_INPUT]: (state, action) => {
      console.log(state, action);
      //   Object.assign({}, state, { click: true, indx: action.indx });
    }
  },
  initialState
);
