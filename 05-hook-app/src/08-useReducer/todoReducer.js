export default function todoReducer(todos, action) {

    const { payload, type } = action;

    if(type === "add_todo") {
        return [payload, ...todos];
    }

    if(type === "remove_todo") {
        return todos.filter(({id}) => id !== payload.id);
    }

    if(type === "change_todo") {
        return todos.map(todo => {
            return todo.id === payload.id ? payload : todo;
        });
    }

    return [...todos]
}