import { authSlice, login, logout, setErrorMessage } from "../../../../src/app/features/auth/authSlice"
import { user } from "../../../fixtures/auth/userFixtures";
import { authenticatedState, initialState, notAuthenticatedState } from "../../../fixtures/auth/authFixtures"


describe('tests on authSlice', () => {
    authenticatedState.user = user;

    test('must return initial state', () => {
        expect(authSlice.getInitialState()).toEqual(initialState)
    })

    test('must login on app', () => {
        const state = authSlice.reducer(initialState, login(user))
        expect( state ).toEqual( authenticatedState );
    })

    test('must logout on app', () => {
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual(notAuthenticatedState);
    })

    test('must clean the error message', () => {
        const expectErrorMessage = "Credenciales no válidas";
        const state = authSlice.reducer(authenticatedState, setErrorMessage(expectErrorMessage));
        const newState = authSlice.reducer(state, setErrorMessage(null));
        expect(newState.errorMessage).toBe(null);
    })
})