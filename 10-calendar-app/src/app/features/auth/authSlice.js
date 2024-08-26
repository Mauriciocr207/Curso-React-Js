import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
      state.errorMessage = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    load: (state) => {
      state.isLoading = true
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    }
  }
});

export const {
  login,
  logout,
  load,
  setErrorMessage
} = authSlice.actions

export default authSlice.reducer