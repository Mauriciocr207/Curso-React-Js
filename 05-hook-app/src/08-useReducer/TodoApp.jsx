import useTodo from "../hooks/useTodo";
import Form from "./Form";
import TodoList from "./TodoList";
import TodosContext from "./context/TodosContext";

export default function TodoApp() {
    const { 
        todos, 
        handleNewTodo, 
        handleChangeTodo, 
        handleDeleteTodo 
    } = useTodo();

    return (
        <>
            <h1 className="text-left font-bold text-gray-900 text-3xl mb-1 border-b border-gray-300 pb-3">TODO App</h1>
            <p className="text-left leading-8 tracking-tight text-gray-500 text-base mb-3">Administra tus tareas</p>
            <div className="grid md:grid md:grid-cols-[1fr,minmax(10rem,17rem)] gap-4">    
                <Form onAddTodo={handleNewTodo}/>
                <TodosContext.Provider value={{handleDeleteTodo, handleChangeTodo}}>
                    <TodoList todoItems={todos}/>
                </TodosContext.Provider>
            </div>
        </>
    )
}