import { useReducer } from "react"
import AuthContext from "../context/AuthContext"
import authReducer from "../context/authReducer"
import types from "../types/authTypes"

export default function AuthProvider({ children }) {
    const [ authState, authenticate ] = useReducer(authReducer, { logged: false }, () => {
        const user = JSON.parse(localStorage.getItem('user'));

        return { logged: !!user, user };
    })

    const login = ( name = "" ) => {
        const user = { id: "ABC", name };

        authenticate({
            type: types.login,
            payload: user
        });
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        localStorage.removeItem('user');
        authenticate({ type: types.logout });
    }
    
    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}