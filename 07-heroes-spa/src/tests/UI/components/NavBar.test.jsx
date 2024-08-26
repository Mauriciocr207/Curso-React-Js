import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { default as AuthContext } from "../../../auth/context/AuthContext"
import { default as NavBar } from "../../../UI/components/NavBar"
import { MemoryRouter } from "react-router-dom"
import "@testing-library/jest-dom"

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate
}))


describe('tests on <NavBar/>', () => {
    test('show name on NavBar', () => {
        const authContext = {
            logged: true,
            user: {id: "123", name: "Mauricio"}
        }

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ authContext }>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const nameText = screen.getByTestId("NavBar.Name");

        expect(nameText).toHaveTextContent(authContext.user.name);
    })

    test('must call logout and navigate functions', async () => {
        const user = userEvent.setup();
        const authContext = {
            logged: true,
            user: {id: "123", name: "Mauricio"},
            logout: jest.fn()
        }

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ authContext }>
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logoutBtn = screen.getByTestId("NavBar.LogoutButton");

        await user.click(logoutBtn);

        expect(authContext.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
    })
})