export default async function getGifs(category) {
    try {
        const limit = 11;
        const api_key = "P4bqDlOJIABOXguKDBgc66YVmpW2SdE1";
        const url = `http://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&q=${category}`
        const response = await fetch(url);
        const {data} = await response.json();

        const gifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }));

        return gifs;
    } catch (error) {
        console.error(error);
    }
}