import { fireEvent, render } from "@testing-library/react"
import LoginPage from "../../../auth/pages/LoginPage"
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { notAuthenticatedState } from "../../fixtures/authFixtures";
import { authSlice } from "../../../app/features/auth";

const mockStartLoginWithGoogle = jest.fn();
const mockStartLoginWithEmail = jest.fn();

jest.mock("../../../app/features/auth/authThunks", () => ({
    startLoginWithGoogle: () => mockStartLoginWithGoogle,
    startLoginWithEmail: ({ email, password }) => {
        return () => mockStartLoginWithEmail({email, password});
    }
}))

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux') ,
   useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: { auth: authSlice },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

describe('test on <LoginPage/>', () => {
    beforeEach(() => jest.clearAllMocks());

    test('must show component correctly', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    })
    
    test('google button must call startLoginWithGoogle', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');

        fireEvent.click(googleBtn);

        expect(mockStartLoginWithGoogle).toHaveBeenCalled();
    })

    test('submit must call startLoginWithEmail', () => {
        const email = "fernando@gmail.com";
        const password = "12312";

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByTestId('email');
        fireEvent.change(emailField, { target: { name: 'email', value: email } });

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } });

        screen.debug();
        const form = screen.getByLabelText('form');
        fireEvent.submit(form);

        expect(mockStartLoginWithEmail).toHaveBeenCalledWith({
            email,
            password
        })
    })


})