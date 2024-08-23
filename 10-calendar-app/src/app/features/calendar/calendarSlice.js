import { createSlice } from "@reduxjs/toolkit";
import { getNow } from "../../../UI/helpers";

const initialState = {
  events: [
    {
      _id: new Date().getTime(),
      title: "Cumpleaños del Jefe",
      notes: "Comprar pastel",
      start: getNow(),
      end: getNow().add({ hours: 2 }),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Fernando",
      },
    },
  ],
  current: null,
  isModalOpen: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
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
      state.events.push({
        _id: new Date().getTime(),
        user: {
          _id: "123",
          name: "Fernando",
        },
        ...action.payload,
      });
      state.isModalOpen = false;
    },
    updateEvent: (state, action) => {
      const event = action.payload;
      const eventIndex = state.events.findIndex(({_id}) => _id === event._id);
      state.events[eventIndex] = event;
      state.isModalOpen = false;
    },
    deleteEvent: (state, action) => {
      const { _id } = action.payload;
      state.events = state.events.filter(event => event._id !== _id);
      state.isModalOpen = false;
    }
  },
});

export const {
  setCurrentEvent,
  openModal,
  closeModal,
  createEvent,
  updateEvent,
  deleteEvent
} = calendarSlice.actions;

export default calendarSlice.reducer;
