import { useEffect, useReducer } from "react";
import todoReducer from "../08-useReducer/todoReducer";

const init = () => {
    const savedTodos = localStorage.getItem('todos');
    return JSON.parse(savedTodos) || [];
}

export default function useTodo() {
    const [ todos, dispatchTodos ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todoTitle) => {
        dispatchTodos({
            type: 'add_todo',
            payload: {
                id: new Date().getTime(),
                name: todoTitle,
                done: false,
            }
        });
    }

    const handleDeleteTodo = (id) => {
        dispatchTodos({
            type: 'remove_todo',
            payload: {id}
        })
    }

    const handleChangeTodo = (todo) => {
        dispatchTodos({
            type: 'change_todo',
            payload: todo
        })
    }

    return  { todos, handleNewTodo, handleChangeTodo, handleDeleteTodo }
}