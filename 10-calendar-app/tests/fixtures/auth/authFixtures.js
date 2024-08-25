export const initialState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};

export const authenticatedState = {
  isLoading: false,
  isAuthenticated: true,
  user: {
      id: "66ca06a1b9d7da0278a2374d",
      name: "test user"
  },
  errorMessage: null,
};

export const notAuthenticatedState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  errorMessage: null,
};
