import { render, screen } from "@testing-library/react"
import MainApp from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom";

describe('test on <MainApp/>', () => {
    test('must show <HomePage/>', () => {
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();
    })

    test('must show <LoginPage/>', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    })
    
    test('must show <AboutPage/>', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect( screen.getByText('AboutPage') ).toBeTruthy();
    })
})