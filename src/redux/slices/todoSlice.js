import { createSlice } from '@reduxjs/toolkit'

const totdoSlice = createSlice({
  name: 'todos',
  initialState: [{ id: 1, title: 'Test', completed: true }],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        desc: action.payload.desc,
        completed: false,
      }
      state.push(newTodo)
    },
    complete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { addTodo, complete, deleteTodo } = totdoSlice.actions
export default totdoSlice.reducer
