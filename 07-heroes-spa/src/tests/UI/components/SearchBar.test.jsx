import { render, screen } from "@testing-library/react"
import SearchBar from "../../../UI/components/SearchBar"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe('tests on <SearchBar/>', () => {
    test('must show at least one result', async () => {
        const user = userEvent.setup();
        
        render(
            <MemoryRouter>
                <SearchBar />
            </MemoryRouter>
        )

        const input = screen.getByTestId("SearchBar.Input");

        await user.click(input);
        await user.keyboard("superman{enter}");

        const heroItems = screen.getAllByTestId("SearchBar.Item");

        expect(heroItems.length).toBeGreaterThan(1);
    })
})