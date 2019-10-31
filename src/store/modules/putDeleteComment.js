import { createAction, handleActions } from "redux-actions";

// action types
const INCREMENT = "putDeleteComment/INCREMENT";
const DECREMENT = "putDeleteComment/DECREMENT";
const DELETE_COMMENT = "putDeleteComment/DELETE_COMMENT";

// action creator fns
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const deleteComment = createAction(DELETE_COMMENT);

// pure function
const goodState = {
  click: false,
  indx: 0,
  goodNum: 0
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
    [DELETE_COMMENT]: (state, action) => {
      console.log(state, action);
      //   Object.assign({}, state, { click: true, indx: action.indx });
    }
  },
  goodState
);
