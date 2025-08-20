import { ADD_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
