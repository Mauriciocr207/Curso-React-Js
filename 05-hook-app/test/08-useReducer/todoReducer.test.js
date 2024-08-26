import todoReducer from "../../src/08-useReducer/todoReducer"

describe('tests on todoReducer', () => {
    const initialState = [{
        id: 1,
        name: 'Demo Todo',
        done: false,
    }]

    test('must return the initial state', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toStrictEqual(initialState);
    })

    test('must add todo', () => {
        const action = {
            type: 'add_todo',
            payload: {
                id: 1,
                name: 'new todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    })
    test('must remove todo', () => {
        const action = {
            type: 'remove_todo',
            payload: {
                id: 1,
                name: 'new todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
        expect(newState).not.toContain(action.payload);
    })
    test('must change todo', () => {
        const action = {
            type: 'change_todo',
            payload: {
                id: 1,
                name: 'new todo',
                done: true
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(1);
        expect(newState).toContain(action.payload);
        expect(newState[0].done).toBe(action.payload.done);
    })
})