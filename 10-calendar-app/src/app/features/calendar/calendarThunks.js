import { parseZonedDateTime } from "@internationalized/date";
import calendarApi from "../../api/calendarApi";
import {
  closeModal,
  createEvent,
  deleteEvent,
  loading,
  openModal,
  setCurrentEvent,
  setErrorMessage,
  setInitialEvents,
  updateEvent,
} from "./calendarSlice";

export const openCreateEventModal = () => {
  return (dispatch) => {
    dispatch(setCurrentEvent(null));
    dispatch(openModal());
  };
};

export const openUpdateEventModal = (event) => {
  return (dispatch) => {
    dispatch(setCurrentEvent(event));
    dispatch(openModal());
  };
};

export const startGetEvents = () => {
  return async (dispatch) => {
    try {
      const { data } = await calendarApi.get("/events");

      const events = data.events.map((event) => {
        return {
          ...event,
          start: parseZonedDateTime(event.start),
          end: parseZonedDateTime(event.end),
        };
      });

      dispatch(setInitialEvents(events));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startCreateEvent = (event) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading());

      const newEvent = {
        ...event,
        start: event.start?.toString(),
        end: event.end?.toString(),
      };

      const { data } = await calendarApi.post("/events", newEvent);

      const { eventSaved } = data;

      eventSaved.start = event.start;
      eventSaved.end = event.end;
      eventSaved.user = getState().auth.user;

      dispatch(createEvent(eventSaved));
      dispatch(closeModal());
    } catch (error) {
      if (error.name === "AxiosError") {
        const { errors } = error.response.data;

        if (errors) {
          if (errors.start) {
            dispatch(setErrorMessage(errors.start.msg));
          } else if (errors.end) {
            dispatch(setErrorMessage(errors.end.msg));
          } else if (errors.title) {
            dispatch(setErrorMessage(errors.title.msg));
          }
        }

        setTimeout(() => {
          dispatch(setErrorMessage(null));
        }, 2000);
      }
    }
  };
};

export const startUpdateEvent = (event) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const { id } = event;

      const newEvent = {
        ...event,
        start: event.start?.toString(),
        end: event.end?.toString(),
      };

      const { data } = await calendarApi.put(`/events/${id}`, newEvent);

      const { event:eventSaved } = data;

      eventSaved.start = event.start;
      eventSaved.end = event.end;

      dispatch(updateEvent(eventSaved));
      dispatch(closeModal());
    } catch (error) {
      if (error.name === "AxiosError") {
        const { errors, error:responseErr } = error.response.data;

        if(responseErr) {
          dispatch(setErrorMessage(responseErr.message));
        }

        if (errors) {
          if (errors.start) {
            dispatch(setErrorMessage(errors.start.msg));
          } else if (errors.end) {
            dispatch(setErrorMessage(errors.end.msg));
          } else if (errors.title) {
            dispatch(setErrorMessage(errors.title.msg));
          }
        }

        setTimeout(() => {
          dispatch(setErrorMessage(null));
        }, 2000);
      }
    }
  };
};

export const startDeleteEvent = (event) => {
  return async(dispatch) => {
    try {
      dispatch(loading());
      const { id } = event;
      await calendarApi.delete(`/events/${id}`);
      dispatch(deleteEvent(event));
    } catch (error) {
      console.log(error);
    }
  }
}