/**
 * async/await
 */
import { createGifBox } from "../utilities/gifBox";

const getImage = async () => {
    try {
        const api_key = "EbkgVGxY1zQYRSgeo9uGu4mLyIMWfjNu";
        const url = `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

        const result = await fetch(url);
        const {data} = await result.json();
        const imageUrl = data.images.original.url;
        createGifBox(imageUrl)
    } catch (err) {
        console.error(err);
    }
}

getImage();