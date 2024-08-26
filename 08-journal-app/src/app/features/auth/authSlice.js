import { createSlice } from "@reduxjs/toolkit";

export const statusTypes = {
  checking: "checking",
  notAuthenthicated: "not-authenticated",
  authenticated: "authenticated",
};

const initialState = {
  status: statusTypes.checking,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      return { 
        ...state,
        status: statusTypes.authenticated,
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
        errorMessage: null,
      }
    },
    logout: (state, action) => {
      return {
        ...state,
        status: statusTypes.notAuthenthicated,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: action.payload?.errorMessage ?? null,
      }
    },
    checkingAuth: (state) => { state.status = statusTypes.checking },
  },
});

export const { login, logout, checkingAuth } = authSlice.actions;

export { authSlice };

export default authSlice.reducer;
