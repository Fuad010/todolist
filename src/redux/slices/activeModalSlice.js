import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActiveAddModal: false,
  isActiveEditModal: true,
}

const activeModalSlice = createSlice({
  name: 'activeModalService',
  initialState,
  reducers: {
    handleActiveAddModal: (state, action) => {
      state.isActiveAddModal = action.payload
    },
    handleActiveEditModal: (state, action) => {
      state.isActiveEditModal = action.payload
    },
  },
})

export const { handleActiveAddModal, handleActiveEditModal } =
  activeModalSlice.actions
export default activeModalSlice.reducer
