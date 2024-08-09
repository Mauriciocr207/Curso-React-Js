import types from "../types/authTypes";

export default function authReducer( state = {}, { type, payload } ) {
    if( type === types.login ) {
        return {
            ...state,
            logged: true,
            user: payload,
        }
    }

    if( type === types.logout ) {
        return {
            ...state,
            logged: false,
            user: null
        }
    }

    return state;
}