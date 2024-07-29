import { render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom";

describe('test on <AddCategory/>', () => {
    test('change input text when typing on input', async () => {
        const user = userEvent.setup();
        const textToType = "Hola mundo";
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByTestId('AddCategory.Input');

        await user.type(input, textToType);

        expect(input).toHaveValue(textToType);
    });

    test('must run callback onNewCategory when submit', async () => {
        const inputValue = "Hola mundo";
        const user  = userEvent.setup();

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByTestId('AddCategory.Input');

        await user.click(input);
        await user.keyboard(`${inputValue}{enter}`);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    
    test('don´t call onNewCategory if input value is empty', async () => {
        const user  = userEvent.setup();

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByTestId('AddCategory.Input');

        await user.click(input);
        await user.keyboard("{enter}");
        
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})