import { fireEvent, render, screen } from "@testing-library/react";
import CalendarModal from "../../../src/UI/components/CalendarModal";
import { Provider } from "react-redux";
import calendarSlice, {
  setCurrentEvent,
} from "../../../src/app/features/calendar/calendarSlice";
import authSlice from "../../../src/app/features/auth/authSlice";
import { initialState } from "../../fixtures/calendar/calendarFixtures";
import { authenticatedState } from "../../fixtures/auth/authFixtures";
import { configureStore } from "@reduxjs/toolkit";
import { event } from "../../fixtures/calendar/eventFixtures";
import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

const mockStartCreateEvent = jest.fn();
const mockStartUpdateEvent = jest.fn();
const mockStartDeleteEvent = jest.fn();

jest.mock("../../../src/app/features/calendar/calendarThunks", () => ({
  startCreateEvent: (event) => () => mockStartCreateEvent(event),
  startUpdateEvent: (event) => () => mockStartUpdateEvent(event),
  startDeleteEvent: (event) => () => mockStartDeleteEvent(event),
}));

const mockStore = configureStore({
  reducer: { auth: authSlice, calendar: calendarSlice },
  preloadedState: {
    calendar: initialState,
    auth: authenticatedState,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

describe("tests on CalendarModal", () => {
  beforeEach(() => jest.clearAllMocks());
  test("renders without errors", () => {
    const { asFragment } = render(
      <Provider store={mockStore}>
        <CalendarModal isOpen={true} onClose={() => {}} />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("should call startCreateEvent when submitting form", async () => {
    render(
      <Provider store={mockStore}>
        <CalendarModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("title"), {
      target: { value: event.title },
    });

    fireEvent.change(screen.getByLabelText("notes"), {
      target: { value: event.notes },
    });

    fireEvent.submit(screen.getByTestId("form"));

    expect(mockStartCreateEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        title: event.title,
        notes: event.notes,
      })
    );
  });

  test("should call startUpdatingEvent when submitting form", async () => {
    const newEvent = {
      title: "evento modificado",
      notes: "notas modificadas",
    };

    mockStore.dispatch(setCurrentEvent(event));

    render(
      <Provider store={mockStore}>
        <CalendarModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("title"), {
      target: { value: newEvent.title },
    });

    fireEvent.change(screen.getByLabelText("notes"), {
      target: { value: newEvent.notes },
    });

    fireEvent.submit(screen.getByTestId("form"));

    expect(mockStartUpdateEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        title: newEvent.title,
        notes: newEvent.notes,
      })
    );
  });
});
