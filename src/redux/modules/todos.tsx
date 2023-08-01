import uuid from "react-uuid";

export type TodoState = Todo[];

const ADD_TODO = "ADD_TODO" as const;
const REMOVE_TODO = "REMOVE_TODO" as const;
const SWITCH_TODO = "SWITCH_TODO" as const;

type TodoActionTypes =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof switchTodo>;

export const addTodo = (title: string, contents: string) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      title,
      contents,
      isDone: false,
    },
  };
};

export const removeTodo = (id: string) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const switchTodo = (id: string) => {
  return {
    type: SWITCH_TODO,
    payload: id,
  };
};

const initialState: TodoState = [
  {
    id: uuid(),
    title: "title1",
    contents: "contents1",
    isDone: false,
  },
  {
    id: uuid(),
    title: "title22",
    contents: "contents22",
    isDone: true,
  },
];

const todos = (
  state: TodoState = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    default:
      return state;
  }
};

export default todos;
