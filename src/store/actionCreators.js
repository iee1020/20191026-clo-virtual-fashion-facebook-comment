import { bindActionCreators } from "redux";
import * as getPostActions from "./modules/getPostComment";
import * as putDeleteActions from "./modules/putDeleteComment";

import store from "./index";
const { dispatch } = store;

export const GetPostActions = bindActionCreators(getPostActions, dispatch);
export const PutDeleteActions = bindActionCreators(putDeleteActions, dispatch);
