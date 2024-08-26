import { events } from "./eventFixtures";

export const initialState = {
    events: [],
    current: null,
    isLoading: false,
    isModalOpen: true,
    errorMessage: null,
};

export const calendarWithEventsState = {
    events: [...events],
    current: null,
    isLoading: false,
    isModalOpen: false,
    errorMessage: null,
};

export const calendarWithActiveEventState = {
    events: [...events],
    current: {...events[0]},
    isLoading: false,
    isModalOpen: false,
    errorMessage: null,
};
