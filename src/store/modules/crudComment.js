import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

// action types
const POST_COMMENT = "crudComment/POST_COMMENT";
const CHANGE_INPUT = "crudComment/CHANGE_INPUT";
const INCREMENT = "crudComment/INCREMENT";
const DECREMENT = "crudComment/DECREMENT";
const DELETE_COMMENT = "crudComment/DELETE_COMMENT";

// action creator fns
export const postComment = createAction(POST_COMMENT);
export const changeInput = createAction(CHANGE_INPUT);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const deleteComment = createAction(DELETE_COMMENT);

// state & function
const IMG_URL =
  "https://image.rocketpunch.com/company/7944/clovirtualfashion_logo_1486533344.jpg?s=400x400&t=inside";

const localSetItem = (arrData, state) => {
  localStorage.setItem("CLO", JSON.stringify(arrData));
  return state.set(
    "localStorage",
    List(JSON.parse(localStorage.getItem("CLO")))
  );
};

const inDelocalArr = (state, action, num) => {
  let localArr = state.get("localStorage").toArray();
  let goodNum = localArr[action.payload].good;
  let boolean = localArr[action.payload].click;
  localArr[action.payload].click = !boolean;
  localArr[action.payload].good = goodNum + num;
  return localArr;
};

const initialState = Map({
  localStorage: List(JSON.parse(localStorage.getItem("CLO"))),
  inputValue: "",
  profile: IMG_URL
});

// pure function
export default handleActions(
  {
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
        return localSetItem([data], state);
      } else if (localArr !== null) {
        data._id = localArr.length;
        localArr[localArr.length] = data;
        return localSetItem(localArr, state);
      }
    },
    [CHANGE_INPUT]: (state, action) => state.set("inputValue", action.payload),
    [DELETE_COMMENT]: (state, action) => {
      let localArr = state.get("localStorage").toArray();
      localArr.splice(action.payload, 1);
      return localSetItem(localArr, state);
    },
    [INCREMENT]: (state, action) => {
      const localArr = inDelocalArr(state, action, 1);
      return localSetItem(localArr, state);
    },
    [DECREMENT]: (state, action) => {
      const localArr = inDelocalArr(state, action, -1);
      return localSetItem(localArr, state);
    }
  },
  initialState
);
