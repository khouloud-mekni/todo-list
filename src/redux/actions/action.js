import {
  ADD_TASK,
  TOGGLE_DONE,
  EDIT_TASK,
  DELETE_TASK,
} from "../constants/actions-types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const toogledone = (payload) => {
  return {
    type: TOGGLE_DONE,
    payload,
  };
};
export const edittask = (payload) => {
  // console.log(payload , "in the action the edited")
  return {
    type: EDIT_TASK,
    payload,
  };
};
export const deletetask = (payload) => {
  console.log(payload);
  return {
    type: DELETE_TASK,
    payload,
  };
};
