export const getImageURL = imageFile => {
    return new URL(`../assets/images/${imageFile}`, import.meta.url).href
}