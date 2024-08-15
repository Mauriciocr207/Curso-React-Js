import { checkingAuth, login, logout } from "../../../../app/features/auth/authSlice";
import { checkAuth, startCreateUserWithEmail, startLoginWithEmail, startLoginWithGoogle, startLogout } from "../../../../app/features/auth/authThunks"
import { clearJournal } from "../../../../app/features/journal";
import { registerUserWithEmail, signWithEmail, signWithGoogle } from "../../../../app/firebase/providers";
import { demoUser } from "../../../fixtures/authFixtures";

jest.mock("../../../../app/firebase/providers");

describe('test on authThunks', () => {
    const dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks());

    test('must run checkAuth', async () => {
        const thunk = checkAuth();
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingAuth());
    })

    test('startLoginWithGoogle must call checkingAuth and login', async () => {
        const loginData = { ok: true,  ...demoUser };

        signWithGoogle.mockResolvedValue(loginData);
           
        const thunk = startLoginWithGoogle();
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingAuth());
        expect(dispatch).toHaveBeenCalledWith(login(demoUser));
    })
    
    test('startLoginWithGoogle must call checkingAuth and logout', async () => {
        const response = { ok: false,  errorMessage: 'invalid credentials' };

        signWithGoogle.mockResolvedValue(response);
           
        const thunk = startLoginWithGoogle();
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingAuth());
        expect(dispatch).toHaveBeenCalledWith(logout(response));
    })
    
    test('startLoginWithEmail must call checkingAuth and login', async () => {
        const response = { ok: true,  ...demoUser };
        const password = "123";

        signWithEmail.mockResolvedValue(response);
           
        const thunk = startLoginWithEmail({ email: demoUser.email, password });
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingAuth());
        expect(dispatch).toHaveBeenCalledWith(login(demoUser));
    })
    
    test('startLoginWithEmail must call checkingAuth and logout', async () => {
        const response = { ok: false,  errorMessage: 'invalid credentials' };
        const password = "123";

        signWithEmail.mockResolvedValue(response);
           
        const thunk = startLoginWithEmail({ email: demoUser.email, password });
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingAuth());
        expect(dispatch).toHaveBeenCalledWith(logout(response));
    })
    
    test('startCreateUserWithEmail must call checkingAuth and login', async () => {
        const response = { ok: true,  ...demoUser };
        const password = "123";

        registerUserWithEmail.mockResolvedValue(response);
           
        const thunk = startCreateUserWithEmail({ email: demoUser.email, password });
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingAuth());
        expect(dispatch).toHaveBeenCalledWith(login(demoUser));
    })
    
    test('startCreateUserWithEmail must call checkingAuth and logout', async () => {
        const response = { ok: false,  errorMessage: 'invalid credentials' };
        const password = "123";

        registerUserWithEmail.mockResolvedValue(response);
           
        const thunk = startCreateUserWithEmail({ email: demoUser.email, password });
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingAuth());
        expect(dispatch).toHaveBeenCalledWith(logout(response));
    })
    
    test('startLogout must call logout and clearJournal', async () => {           
        const thunk = startLogout();
        
        await thunk(dispatch);

        expect(dispatch).toHaveBeenCalledWith(logout());
        expect(dispatch).toHaveBeenCalledWith(clearJournal());
    })
})