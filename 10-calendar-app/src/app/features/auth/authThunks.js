import calendarApi from "../../api/calendarApi";
import { removeAllEvents } from "../calendar/calendarSlice";
import { load, login, logout, setErrorMessage } from "./authSlice"

export function startLogin({ email, pass }) {
    return async (dispatch) => {
        try {
            dispatch(load())
            
            const response = await calendarApi.post('/auth/login', { email, pass });

            const user = response.data;

            localStorage.setItem('token', user.token);
            
            dispatch(login({ name: user.name, id: user.id }));
        } catch (error) {
            if(error.name === "AxiosError") {
                dispatch(setErrorMessage("Credenciales inválidas"));
                setTimeout(() => {
                    dispatch(setErrorMessage(null));
                }, 2000);
            }

            dispatch(logout());
        }
    }
}

export function startRegister({ name, email, pass }) {
    return async (dispatch) => {
        try {
            dispatch(load());

            const { data: user } = await calendarApi.post('/auth/register', { name, email, pass });

            localStorage.setItem('token', user.token);
            
            dispatch(login({ name: user.name, id: user.id }));
        } catch (error) {
            if(error.name === "AxiosError") {
                const { error: responseErr } = error.response.data;
                if(responseErr) {
                    dispatch(setErrorMessage(responseErr.message));
                }

                const { errors } = error.response.data;
                
                if(errors) {
                    if(errors.email) {
                        dispatch(setErrorMessage(errors.email.msg));
                    } else if(errors.name) {
                        return dispatch(setErrorMessage(errors.name.msg));
                    } else if(errors.pass) {
                        dispatch(setErrorMessage(errors.pass.msg));
                    }
                }
                
                setTimeout(() => {
                    dispatch(setErrorMessage(null));
                }, 2000);
            }

            dispatch(logout());
        }
    }    
}

export function checkAuthToken() {
    return async(dispatch) => {
        try {
            dispatch(load());
            const token = localStorage.getItem('token');
            if(!token) {
                return dispatch(logout());
            }

            const { data: user  } = await calendarApi.get('/auth/re-validate-token');

            localStorage.setItem('token', user.token);

            dispatch(login({ name: user.name, id: user.id }));
        } catch (error) {
            console.log(error);
        }
    }
}

export function startLogout() {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch(logout());
        dispatch(removeAllEvents());
    }
}