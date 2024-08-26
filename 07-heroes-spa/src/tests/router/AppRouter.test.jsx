import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import AuthContext from "../../auth/context/AuthContext";
import AppRouter from "../../router/AppRouter"

describe('test on <AppRouter/>', () => {
    test('must show login if no authenticate', () => {
        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={ { logged: false } }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        expect(screen.getByText("Inicia Sesión")).toBeTruthy();
    })
    
    test('must show marvel page if authenticate', () => {
        const authContext = {
            logged: true,
            user: {id: "123", name: "Mauricio"}
        };

        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={ authContext }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
    
        const marvelTitle = screen.getByTestId("MarvelPage.Title");

        expect(marvelTitle).toBeTruthy();
    })
})