import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

// action types
const GET_COMMENT = "getPostComment/GET_COMMENT";
const POST_COMMENT = "getPostComment/POST_COMMENT";
const CHANGE_INPUT = "getPostComment/CHANGE_INPUT";

// action creator fns
export const getComments = createAction(GET_COMMENT);
export const postComment = createAction(POST_COMMENT);
export const changeInput = createAction(CHANGE_INPUT);

// pure function

const IMG_URL =
  "https://image.rocketpunch.com/company/7944/clovirtualfashion_logo_1486533344.jpg?s=400x400&t=inside";

const localSetItem = arrData => {
  localStorage.setItem("CLO", JSON.stringify(arrData));
};

const initialState = Map({
  localStorage: List(JSON.parse(localStorage.getItem("CLO"))),
  click: false,
  inputValue: "",
  profile: IMG_URL
});

export default handleActions(
  {
    [GET_COMMENT]: state => state.localStorage,
    [POST_COMMENT]: (state, action) => {
      const { time } = action.payload;
      const localArr = state.get("localStorage").toArray();
      let data = {
        _id: 0,
        img: state.get("profile"),
        username: "CLO",
        comment: state.get("inputValue"),
        time: time,
        good: 0,
        click: false
      };

      if (localArr === null) {
        localSetItem([data]);
        return state.set(
          "localStorage",
          List(JSON.parse(localStorage.getItem("CLO")))
        );
      } else if (localArr !== null) {
        data._id = localArr.length;
        localArr[localArr.length] = data;
        localSetItem(localArr);
        return state.set(
          "localStorage",
          List(JSON.parse(localStorage.getItem("CLO")))
        );
      }
    },
    [CHANGE_INPUT]: (state, action) => state.set("inputValue", action.payload)
  },
  initialState
);
