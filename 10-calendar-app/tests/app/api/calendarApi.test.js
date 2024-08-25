import calendarApi from "../../../src/app/api/calendarApi";

describe('tests on calendarApi', () => {
    test('must get the deafult configuration', () => {
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
    })

    test('configure Authorization header', async () => {
        const expectToken = "some token";
        try {
            /**
             * In order the token is not valid
             * we expect the request fail
             */
            localStorage.setItem('token', expectToken);
            await calendarApi.get('/events');
        } catch (response) {            
            const { headers } = response.config;
            expect(headers.Authorization).toBe(`Bearer ${expectToken}`);
        }
    })
})