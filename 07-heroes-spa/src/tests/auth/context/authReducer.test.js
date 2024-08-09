import authReducer from "../../../auth/context/authReducer"
import types from "../../../auth/types/authTypes";


describe('tests on authReducer', () => {
    test('must show the default state', () => {
        const initialState = { logged: false }
        const authState = authReducer(initialState, {});
        expect( authState ).toEqual(initialState);
    })
    
    test('must login the user', () => {
        const initialState = { logged: false }
        const expectUser = {id: "123", name: "Mauricio"};

        const { logged, user } = authReducer(initialState, {
            type: types.login,
            payload: expectUser 
        })

        expect(logged).toBe(true);
        expect(user).toEqual(expectUser);
    })
    
    test('must logout the user', () => {
        const expectUser = {id: "123", name: "Mauricio"};
        const initialState = { 
            logged: true, 
            user: expectUser
        }
        
        const { logged, user } = authReducer(initialState, {
            type: types.login,
            payload: expectUser 
        })

        expect(logged).toBe(true);
        expect(user).toEqual(expectUser);
    })
})