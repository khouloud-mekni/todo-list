import { v4 as uuidv4 } from "uuid";
import {
  ADD_TASK,
  EDIT_TASK,
  TOGGLE_DONE,
  DELETE_TASK,
} from "../constants/actions-types";
const initialState = {
  listTodo: [
    { id: uuidv4(), description: "let's we learn redux", isDone: false },
    {
      id: uuidv4(),
      description: "playing ludo with my friends",
      isDone: true,
    },
    { id: uuidv4(), description: "watching movie on Netflix", isDone: true },
    {
      id: uuidv4(),
      description: "make a beautiful website with react redux",
      isDone: false,
    },
  ],
};
function TodoReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        listTodo: [
          ...state.listTodo,
          { id: uuidv4(), description: payload, isDone: false },
        ],
      };
    case TOGGLE_DONE:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case EDIT_TASK:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload.id
            ? { ...task, description: payload.edited }
            : task
        ),
      };
    case DELETE_TASK:
      return { listTodo: state.listTodo.filter((task) => task.id !== payload) };
    default:
      return state;
  }
}
export default TodoReducer;
