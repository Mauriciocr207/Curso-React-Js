import { render, screen } from "@testing-library/react"
import PublicRoutes from "../../router/PublicRoutes"
import AuthContext from "../../auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('tests on <PublicRoute/>', () => {
    test('must show a children if no authenticate', () => {
        const expectText = "No autenticado"
        render( 
            <AuthContext.Provider value={ {logged: false} }>
                <PublicRoutes>
                    <p>{expectText}</p>
                </PublicRoutes> 
            </AuthContext.Provider>
        )

        expect(screen.getByText(expectText)).toBeTruthy();
    })

    test('must change view if authenticate', () => {
        const expectText = "No autenticado";
        const expectMarvelText = "Página Marvel";

        const contextValue = {
            logged: true,
            user: {
                id: "123",
                name: "Strider",
            }
        }
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoutes>
                                <p>{expectText}</p>
                            </PublicRoutes> 
                        } />
                        <Route path="/marvel" element={<h1>{expectMarvelText}</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText(expectMarvelText)).toBeTruthy();
    })
})