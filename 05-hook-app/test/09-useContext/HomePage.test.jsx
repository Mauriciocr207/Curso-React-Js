const { render, screen } = require("@testing-library/react")
const { default: UserContext } = require("../../src/09-useContext/context/UserContext")
const { default: HomePage } = require("../../src/09-useContext/HomePage")

describe('tests on <HomePage/>', () => {
    test('must show the component without user', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTagText = screen.getByTestId('HomePage.Pre').innerHTML;

        expect( preTagText ).toBe('null');
    })

    test('must show the component with user', () => {
        const user = {
            id: 1,
            name: "Mau",
            email: "mau@gmail.com"
        }

        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTagText = screen.getByTestId('HomePage.Pre').innerHTML;

        expect(JSON.parse(preTagText)).toEqual(user);
    })
})