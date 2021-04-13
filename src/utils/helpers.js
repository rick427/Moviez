export const ACCESS_KEY = process.env.REACT_APP_MOVIE_ACCESS_KEY;

export const CONFIG = localStorage.getItem('movie-config') ? JSON.parse(localStorage.getItem('movie-config')) : {}

export const parseImageUrl = (url, size, filePath) => {
    if(filePath){
        return `${url}${size}${filePath}`;
    }
    return '';
}