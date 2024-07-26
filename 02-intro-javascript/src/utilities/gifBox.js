export function createGifBox(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);
}