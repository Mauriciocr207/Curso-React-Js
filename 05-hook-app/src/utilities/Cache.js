
export default function Cache() {
    const cache = {};
    return {
        has(url) {
            // eslint-disable-next-line
            return cache.hasOwnProperty(url);
        },
        get(url) {
            return cache[url]
        },
        set(url, data) {
            cache[url] = data;
        },
        get getAll() {
            return cache;
        }
    }
}