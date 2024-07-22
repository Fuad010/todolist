import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActiveAllTable: true,
  isActiveCompletedTable: false,
}

const activeTableSlice = createSlice({
  name: 'activeTableService',
  initialState,
  reducers: {
    handleActiveAllTable: (state, action) => {
      state.isActiveAllTable = action.payload
      if (action.payload) {
        state.isActiveCompletedTable = false
      }
    },
    handleActiveCompletedTable: (state, action) => {
      state.isActiveCompletedTable = action.payload
      if (action.payload) {
        state.isActiveAllTable = true
      }
    },
  },
})

export const { handleActiveAllTable, handleActiveCompletedTable } =
  activeTableSlice.actions
export default activeTableSlice.reducer
