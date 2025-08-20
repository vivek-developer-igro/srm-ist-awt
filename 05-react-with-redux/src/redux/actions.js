// Action Types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Action Creators
export const addTodo = (task) => ({
    type: ADD_TODO,
    payload: task,
});

export const removeTodo = (index) => ({
    type: REMOVE_TODO,
    payload: index,
});
