import { render, screen } from "@testing-library/react";
import UserContext from "../../src/09-useContext/context/UserContext";
import LoginPage from "../../src/09-useContext/LoginPage";
import userEvent from "@testing-library/user-event";

describe('test on <LoginPage/>', () => {
    test('must show component without user', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const preTagText = screen.getByTestId('LoginPage.Pre').innerHTML;

        expect( preTagText ).toBe('null');
    })

    test('must call setUser when click on button', async () => {
        const user = userEvent.setup();
        const userData = {
            id: 123,
            name: "Mau",
            email: "mau@gmail.com"
        }
        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        const loginButton = screen.getByTestId("LoginPage.Button");
    
        await user.click(loginButton);
        
        expect( setUser ).toHaveBeenCalledWith(userData)
    })
})