import { configureStore } from '@reduxjs/toolkit'
import activeAllTableReducer from '../slices/activeTableSlice'
import activeModalReducer from '../slices/activeModalSlice'

const store = configureStore({
  reducer: {
    activeModal: activeModalReducer,
    activeAllTable: activeAllTableReducer,
  },
})

export default store
