import { calendarSlice, createEvent, deleteEvent, removeAllEvents, setCurrentEvent, setInitialEvents, updateEvent } from "../../../../src/app/features/calendar/calendarSlice"
import { event, events } from "../../../fixtures/calendar/eventFixtures";
import { calendarWithEventsState, initialState } from "../../../fixtures/calendar/calendarFixtures";

describe('tests on calendarSlice', () => {
    test('must return initial state', () => {
        initialState.isModalOpen = false;
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState);
    })

    test('check setInitialEvents method', () => {
        const state = calendarSlice.reducer(initialState, setInitialEvents(events));
        expect(state.events).toBe(events);
    })

    test('check setCurrentEvent method', () => {
        const state = calendarSlice.reducer(calendarWithEventsState, setCurrentEvent(events[0]));
        expect(state.current).toEqual(events[0]);
    })

    test('check createEvent method', () => {
        const state = calendarSlice.reducer(calendarWithEventsState, createEvent(event));
        expect(state.events).toEqual(
            expect.arrayContaining([
                expect.objectContaining(event)
            ])
        )
    })

    test('check updateEvent method', () => {
        const [event] = events;

        const updatedEvent = { ...event, title: "evento modificado" };

        const state = calendarSlice.reducer(calendarWithEventsState, updateEvent(updatedEvent));

        expect(state.events).toEqual(
            expect.arrayContaining([
                expect.objectContaining(updatedEvent)
            ])
        )
    })

    test('check deleteEvent method', () => {
        const [event] = events;

        const state = calendarSlice.reducer(calendarWithEventsState, deleteEvent(event));

        expect(state.events).not.toEqual(
            expect.arrayContaining([
                expect.objectContaining(event)
            ])
        )
    })

    test('check removeAllEvents method', () => {
        const state = calendarSlice.reducer(calendarWithEventsState, removeAllEvents());
        expect(state.events).toEqual([]);
    })
})