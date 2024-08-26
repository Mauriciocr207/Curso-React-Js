import getGifs from "../../src/helpers/getGifs"

describe('tests on getGifs', () => {
    test('must return a gif array', async () => {
        const gifs = await getGifs();
        expect(Array.isArray(gifs)).toBeTruthy();
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs.length).toBeLessThanOrEqual(11);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})