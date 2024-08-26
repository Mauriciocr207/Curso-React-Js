import { render, screen, fireEvent } from "@testing-library/react";
import RegisterPage from "../../../../src/UI/pages/auth/RegisterPage";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import authSlice, { setErrorMessage } from "../../../../src/app/features/auth/authSlice";
import { initialState } from "../../../fixtures/auth/authFixtures";
import { configureStore } from "@reduxjs/toolkit";
import { registerUser } from "../../../fixtures/auth/userFixtures";
import "@testing-library/jest-dom";

const mockStartRegister = jest.fn();

jest.mock("../../../../src/app/features/auth/authThunks", () => ({
  startRegister: (formState) => () => mockStartRegister(formState),
}));

const mockStore = configureStore({
  reducer: { auth: authSlice },
  preloadedState: {
    auth: initialState,
  },
});

describe("RegisterPage", () => {
    beforeEach(() => jest.clearAllMocks());

    test("renders login form", () => {
      const { asFragment } = render(
        <MemoryRouter>
          <Provider store={mockStore}>
            <RegisterPage />
          </Provider>
        </MemoryRouter>
      );

      expect(asFragment()).toMatchSnapshot();
    });

    test("submits register form with valid credentials", () => {
      const { name, email, pass, confirmPass } = registerUser;
      render(
        <MemoryRouter>
          <Provider store={mockStore}>
            <RegisterPage />
          </Provider>
        </MemoryRouter>
      );

      fireEvent.change(screen.getByTestId("name"), {
        target: { value: name },
      });
      fireEvent.change(screen.getByTestId("email"), {
        target: { value: email },
      });
      fireEvent.change(screen.getByTestId("password"), {
        target: { value: pass },
      });
      fireEvent.change(screen.getByTestId("confirmPassword"), {
        target: { value: confirmPass },
      });

      fireEvent.click(screen.getByTestId("register-button"));

      expect(mockStartRegister).toHaveBeenCalledWith(registerUser);
    });

    test("displays error message for incorrect password confirmation", () => {
        const { name, email, pass } = registerUser;

        render(
            <MemoryRouter>
                <Provider store={mockStore}>
                <RegisterPage />
                </Provider>
            </MemoryRouter>
        );

        fireEvent.change(screen.getByTestId("name"), {
            target: { value: name },
        });
        fireEvent.change(screen.getByTestId("email"), {
            target: { value: email },
        });
        fireEvent.change(screen.getByTestId("password"), {
            target: { value: pass },
        });
        fireEvent.change(screen.getByTestId("confirmPassword"), {
            target: { value: `${pass} wrong` },
        });

        fireEvent.click(screen.getByTestId("register-button"));

        expect(
          screen.getByText("Completa los campos correctamente para continuar")
        ).toBeInTheDocument();
    });

    test("displays error message for invalid credentials", () => {
        const expectErrorMessage = "Existe un usuario con este correo";
        mockStartRegister.mockReturnValue(
            mockStore.dispatch(setErrorMessage(expectErrorMessage))
        );

        render(
            <MemoryRouter>
                <Provider store={mockStore}>
                    <RegisterPage />
                </Provider>
            </MemoryRouter>
        );

        expect(screen.getByTestId("errorMessage")).toHaveTextContent(
            expectErrorMessage
        );
    });
});