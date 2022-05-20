import {  getTrendingMoviesPreview, getCategoriesPreview } from "./main.js";

const navigator = () => {
    console.log({ location });
    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        moviesPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

const homePage = () => {
    console.log('HOME');
    getTrendingMoviesPreview();
    getCategoriesPreview();
}
const categoriesPage = () => console.log('CATEGORIAS');
const moviesPage = () => console.log('MOVIE');
const searchPage = () => console.log('BUSQUEDAS');
const trendsPage = () => console.log('TRENDS');