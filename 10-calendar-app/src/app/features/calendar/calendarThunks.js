import { openModal, setCurrentEvent } from "./calendarSlice";

export const startCreatingEvent = () => {      
    return (dispatch) => {
        dispatch(setCurrentEvent(null));
        dispatch(openModal());
    }
}

export const startUpdatingEvent = (event) => {
    return (dispatch) => {
        dispatch(setCurrentEvent(event));
        dispatch(openModal());
    }
}