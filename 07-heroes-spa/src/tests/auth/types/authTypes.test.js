import types from "../../../auth/types/authTypes"

describe('tests on types.js', () => {
    test('snapshot on types.js', () => {
        expect(types).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout",
        })
    })
})