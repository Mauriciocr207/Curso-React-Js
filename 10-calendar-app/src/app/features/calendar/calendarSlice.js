import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  current: null,
  isLoading: false,
  isModalOpen: false,
  errorMessage: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setInitialEvents: (state, action) => { state.events = action.payload },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setCurrentEvent: (state, action) => {
      state.current = action.payload;
    },
    createEvent: (state, action) => {
      state.events.push(action.payload);
      state.isLoading = false;
    },
    updateEvent: (state, action) => {
      const event = action.payload;
      const eventIndex = state.events.findIndex(({id}) => id === event.id);
      state.events[eventIndex] = event;
      state.isLoading = false;
    },
    deleteEvent: (state, action) => {
      const { id } = action.payload;
      state.events = state.events.filter(event => event.id !== id);
      state.isLoading = false;
      state.isModalOpen = false;
    },
    loading: (state) => { state.isLoading = true },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
    removeAllEvents: (state) => { 
      state.events = [];
      state.current = null;
      state.isLoading = false;
      state.isModalOpen = false;
      state.errorMessage = null;
     }
  },
});

export const {
  setInitialEvents,
  setCurrentEvent,
  openModal,
  closeModal,
  createEvent,
  updateEvent,
  deleteEvent,
  loading,
  setErrorMessage,
  removeAllEvents
} = calendarSlice.actions;

export default calendarSlice.reducer;
