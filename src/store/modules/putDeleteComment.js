import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

// action types
const INCREMENT = "putDeleteComment/INCREMENT";
const DECREMENT = "putDeleteComment/DECREMENT";
const CHECK_GOOD = "putDeleteComment/CHECK_GOOD";
const DELETE_COMMENT = "putDeleteComment/DELETE_COMMENT";

// action creator fns
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const checkGood = createAction(CHECK_GOOD);
export const deleteComment = createAction(DELETE_COMMENT);

// pure function
const goodState = {
  localStorage: List(JSON.parse(localStorage.getItem("CLO")))
};

export default handleActions(
  {
    [INCREMENT]: (state, action) => {
      console.log(state, action);
      //   Object.assign({}, state, { click: true, indx: action.indx });
    },
    [DECREMENT]: (state, action) => {
      console.log(state, action);
      //   Object.assign({}, state, { click: true, indx: action.indx });
    },
    [CHECK_GOOD]: (state, action) => {
      console.log(state, action);
      //   Object.assign({}, state, { click: true, indx: action.indx });
    },
    [DELETE_COMMENT]: (state, action) => {
      console.log(state, action);
      //   Object.assign({}, state, { click: true, indx: action.indx });
    }
  },
  goodState
);
