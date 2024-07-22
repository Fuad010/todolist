import { configureStore } from '@reduxjs/toolkit'
import activeAllTableReducer from '../slices/activeTableSlice'
import activeModalReducer from '../slices/activeModalSlice'
import todoReducer from '../slices/todoSlice'

const store = configureStore({
  reducer: {
    activeModal: activeModalReducer,
    activeAllTable: activeAllTableReducer,
    todos: todoReducer,
  },
})

export default store
