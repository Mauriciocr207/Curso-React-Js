import { statusTypes } from "../../app/features/auth/authSlice";

export const demoUser = {
  uid: "123ABC",
  email: "demo@google.com",
  displayName: "Demo User",
  photoURL: "https://demo.jpg",
};

export const initialState = {
  status: statusTypes.checking,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: statusTypes.authenticated,
  ...demoUser,
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: statusTypes.notAuthenthicated,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};
