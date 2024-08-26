import { authSlice, checkingAuth, login, logout } from "../../../../app/features/auth/authSlice"
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../../fixtures/authFixtures";

describe('tests on authSlice', () => {
    test('', () => {
        const state = authSlice.reducer(initialState, {});
        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
    })

    test('must authenticate user', () => {
        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual(authenticatedState);
    })

    test('must logout user', () => {
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual(notAuthenticatedState);
    })
    
    test('must logout user and show an error', () => {
        const errorMessage = "Credenciales no son correctas";
        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage
        });
    })

    test('must check the authentication', () => {
        const state = authSlice.reducer(initialState, checkingAuth());
        expect(state.status).toBe('checking');
    })
})