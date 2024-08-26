const initialState = [{
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {
    if(action.type === "[TODO] add todo") {
        return [...state, action.payload];
    }

    return state;
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: {
        id: 2,
        todo: "nuevo todo",
        done: false,
    },
}

let todos = todoReducer();
todos = todoReducer(todos, addTodoAction);
todos = todoReducer(todos, addTodoAction);

console.log(todos);

