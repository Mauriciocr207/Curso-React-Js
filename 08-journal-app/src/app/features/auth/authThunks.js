import { logoutAnySession, registerUserWithEmail, signWithEmail, signWithGoogle } from "../../firebase/providers";
import { clearJournal } from "../journal";
import { checkingAuth, login, logout } from "./authSlice";

export const checkAuth = () => {
    return async (dispatch) => {
        dispatch( checkingAuth() );
    }
}

export const startLoginWithGoogle = () => {
    return async (dispatch) => {
        try {
            dispatch( checkingAuth() );
            const response = await signWithGoogle();

            const {ok, ...user} = response;

            if(!ok) throw response;
            
            dispatch( login(user) );
        } catch (error) {
            dispatch( logout(error) );
        }
    }
}

export const startLoginWithEmail = ({ email, password }) => {
    return async (dispatch) => {
        try {
            dispatch( checkingAuth() );
            const response = await signWithEmail({ email, password });

            const { ok, ...user } = response;

            if(!ok) throw response;

            dispatch( login(user) );
        } catch (error) {
            dispatch( logout(error) );
        }
    }
}

export const startCreateUserWithEmail = ({ email, password, displayName }) => {
    return async (dispatch) => {
        try {
            dispatch( checkingAuth() );

            const response = await registerUserWithEmail({ email, password, displayName });

            const {ok, ...user} = response;
            
            if(!ok) throw response;

            dispatch( login(user) );
        } catch (error) {
            dispatch( logout(error) );
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutAnySession();
        dispatch( logout() );
        dispatch( clearJournal() );
    }
}
