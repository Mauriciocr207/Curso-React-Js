import { render, screen } from "@testing-library/react"
import AuthContext from "../../auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import PrivateRoutes from "../../router/PrivateRoutes"

describe('tests on <PrivateRoute/>', () => {
    test('must show a children if authenticate', () => {

        Storage.prototype.setItem = jest.fn();

        const expectText = "autenticado"
        render( 
            <AuthContext.Provider value={ {logged: true} }>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <PrivateRoutes>
                        <p>{expectText}</p>
                    </PrivateRoutes> 
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText(expectText)).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
    })

    test('must change view if no authenticate', () => {
        const expectText = "No autenticado";
        const expectMarvelText = "Página Marvel";

        render( 
            <AuthContext.Provider value={ {logged: false} }>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <Routes>
                        <Route path="/login" element={<h1>{expectText}</h1>}/>
                        <Route path="/marvel" element={
                            <PrivateRoutes>
                                <p>{expectMarvelText}</p>
                            </PrivateRoutes> 
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText(expectText)).toBeTruthy();
    })
})