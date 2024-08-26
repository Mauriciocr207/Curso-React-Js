import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import CounterApp from "../src/CounterApp"

describe('CounterApp test', () => {
    const initialValue = 100;

    test('valid snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    })

    test('initial value is 100', () => {
        render(<CounterApp value={initialValue}/>);
        const count = screen.getByTestId('CounterApp.count');
        expect(count).toBeTruthy();
        expect(+count.textContent).toBe(100);
    })

    test('increment value', async () => {
        const user = userEvent.setup();
        render(<CounterApp value={initialValue}/>);
        const incrementBtn = screen.getByTestId('CounterApp.inc');
        const count = screen.getByTestId('CounterApp.count');

        await user.click(incrementBtn);

        expect(+count.textContent).toBe(101);
    })
    
    test('decrement value', async () => {
        const user = userEvent.setup();
        render(<CounterApp value={initialValue}/>);
        const incrementBtn = screen.getByTestId('CounterApp.dec');
        const count = screen.getByTestId('CounterApp.count');

        await user.click(incrementBtn);

        expect(+count.textContent).toBe(99);
    })
    
    test('reset value', async () => {
        const user = userEvent.setup();
        render(<CounterApp value={initialValue}/>);
        const incrementBtn = screen.getByTestId('CounterApp.res');
        const count = screen.getByTestId('CounterApp.count');

        await user.click(incrementBtn);

        expect(+count.textContent).toBe(100);
    })
})