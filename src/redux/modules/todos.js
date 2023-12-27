import { v4 as uuidv4 } from "uuid";

// action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// initial states
const initialState = [
  {
    id: uuidv4(),
    title: "React Study",
    content: "Redux Toolkit",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "Code Kata",
    content: "수박수박수박수박수박수(2)",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "NextJS Study",
    content: "Data Fetching",
    isDone: false,
  },
];

// reducers
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todos;
