import { render, screen } from "@testing-library/react";
import TodoItem from "../../src/08-useReducer/TodoItem"
import TodosContext from "../../src/08-useReducer/context/TodosContext";
import userEvent from "@testing-library/user-event";


describe('test on <TodoItem/>', () => {
    const todo = {
        id: 1,
        name: "Nuevo todo",
        done: false,
    }

    const handleChangeTodo = jest.fn();
    const handleDeleteTodo = jest.fn();
    
    test('must show the pending todo to be completed', () => {
        render(
            <TodosContext.Provider value={{handleChangeTodo, handleDeleteTodo}}>
                <TodoItem {...todo}/>
            </TodosContext.Provider>
        );

        const todoItem = screen.getByTestId("TodoItem");
        expect(todoItem).toBeTruthy(); 
    })

    test('must show the complete todo', () => {
        todo.done = true;

        render(
            <TodosContext.Provider value={{handleChangeTodo, handleDeleteTodo}}>
                <TodoItem {...todo}/>
            </TodosContext.Provider>
        );

        const todoItemText = screen.getByTestId("TodoItem.Name");
        expect(todoItemText.style.textDecorationLine).toBe("line-through");
    })

    test('must call handleChangeTodo function when check todo', async () => {
        const user = userEvent.setup();

        render(
            <TodosContext.Provider value={{handleChangeTodo, handleDeleteTodo}}>
                <TodoItem {...todo}/>
            </TodosContext.Provider>
        );

        const TodoCheckbox = screen.getByTestId("TodoItem.Checkbox");

        await user.click(TodoCheckbox);

        expect(handleChangeTodo).toHaveBeenCalled();
        todo.done = !todo.done
        expect(handleChangeTodo).toHaveBeenCalledWith(todo);
    })
    
    test('must call handleDeleteTodo function when delete todo', async () => {
        const user = userEvent.setup();

        render(
            <TodosContext.Provider value={{handleChangeTodo, handleDeleteTodo}}>
                <TodoItem {...todo}/>
            </TodosContext.Provider>
        );

        const deleteBtn = screen.getByTestId("TodoItem.DeleteButton");

        await user.click(deleteBtn);

        expect(handleDeleteTodo).toHaveBeenCalled();
        expect(handleDeleteTodo).toHaveBeenCalledWith(todo.id);
    })    
})