import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import authSlice, {
  setErrorMessage,
} from "../../../../src/app/features/auth/authSlice";
import { initialState } from "../../../fixtures/auth/authFixtures";
import LoginPage from "../../../../src/UI/pages/auth/LoginPage";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { user } from "../../../fixtures/auth/userFixtures";

const mockStartLogin = jest.fn();

jest.mock("../../../../src/app/features/auth/authThunks", () => ({
  startLogin:
    ({ email, pass }) =>
    () =>
      mockStartLogin({ email, pass }),
}));

const mockStore = configureStore({
  reducer: { auth: authSlice },
  preloadedState: {
    auth: initialState,
  },
});

describe("LoginPage", () => {
    beforeEach(() => jest.clearAllMocks());

    test("renders login form", async () => {
        const { asFragment } = render(
            <MemoryRouter>
                <Provider store={mockStore}>
                    <LoginPage />
                </Provider>
            </MemoryRouter>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test("submits login form with valid credentials", () => {
        const { email, pass } = user;
        render(
            <MemoryRouter>
                <Provider store={mockStore}>
                    <LoginPage />
                </Provider>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByTestId("email"), {
            target: { value: email },
        });
        fireEvent.change(screen.getByTestId("password"), {
            target: { value: pass },
        });

        fireEvent.click(screen.getByTestId("login-button"));

        expect(mockStartLogin).toHaveBeenCalledWith({ email, pass });
    });

    test("displays error message for invalid credentials", async () => {
        const expectErrorMessage = "Credenciales no válidas";
        mockStartLogin.mockReturnValue(
            mockStore.dispatch(setErrorMessage(expectErrorMessage))
        );

        render(
            <MemoryRouter>
                <Provider store={mockStore}>
                    <LoginPage />
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByTestId("errorMessage")).toHaveTextContent(
            expectErrorMessage
        );
    });
});