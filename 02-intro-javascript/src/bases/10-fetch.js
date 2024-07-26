/**
 * fetch
 */

import { createGifBox } from "../utilities/gifBox";

const api_key = "EbkgVGxY1zQYRSgeo9uGu4mLyIMWfjNu";

const url = `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

fetch(url)
    .then(resp => resp.json())
    .then(({data}) => data.images.original.url)
    .then(createGifBox)
    .catch(console.log);