import { render, screen } from "@testing-library/react";
import useTodo from "../../src/hooks/useTodo"
import TodoApp from "../../src/08-useReducer/TodoApp";

jest.mock("../../src/hooks/useTodo");

describe('test on <TodoApp/>', () => {
    useTodo.mockReturnValue({
        todos: [
            {id: 1, name: "todo #1", done: false},
            {id: 2, name: "todo #2", done: true},
        ], 
        handleNewTodo: jest.fn(),
        handleChangeTodo: jest.fn(),
        handleDeleteTod: jest.fn(),
    })

    test('must show the component well', () => {
        render(<TodoApp/>);

        expect( screen.getByText('todo #1') ).toBeTruthy();
        expect( screen.getByText('todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    })
})