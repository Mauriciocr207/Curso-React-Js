import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    
  }
});

export const {} = uiSlice.actions

export default uiSlice.reducer