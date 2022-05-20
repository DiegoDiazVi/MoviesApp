import {  getTrendingMoviesPreview, getCategoriesPreview } from "./main.js";
import {headerContainerHomeTitle, containerHome, conatinerHomeCategories, headerContainerMovieDetail, MovieDetailList, headerColor, headerContainerHomeSearch, MovieDetailReturn, movieList, headerContainerTitle } from './nodes.js';

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
    //home
    headerContainerHomeTitle.classList.remove('inactive');
    headerContainerHomeSearch.classList.remove('inactive');
    containerHome.classList.remove('inactive');
    conatinerHomeCategories.classList.remove('inactive');
    headerContainerHomeSearch.classList.remove('inactive');
    //another pages
    headerColor.classList.remove('header-container--categories');
    headerContainerMovieDetail.classList.add('inactive');
    headerContainerMovieDetail.style.background = '';
    MovieDetailList.classList.add('inactive');
    MovieDetailReturn.classList.add('inactive');
    movieList.classList.add('inactive');
    //load
    getTrendingMoviesPreview();
    getCategoriesPreview();
}
const categoriesPage = () => {
    console.log('CATEGORIAS');
    //Categorias
    headerColor.classList.add('header-container--categories');
    MovieDetailReturn.classList.remove('inactive');
    movieList.classList.remove('inactive');
    headerContainerTitle.classList.remove('inactive');
    //another pages
    headerContainerHomeTitle.classList.add('inactive');
    headerContainerHomeSearch.classList.add('inactive');
    containerHome.classList.add('inactive');
    conatinerHomeCategories.classList.add('inactive');
    headerContainerHomeSearch.classList.add('inactive');
    headerContainerMovieDetail.classList.add('inactive');
    headerContainerMovieDetail.style.background = '';
    MovieDetailList.classList.add('inactive');
}
const moviesPage = () => {
    console.log('MOVIE');
    //movies
    headerContainerMovieDetail.classList.remove('inactive');
    headerContainerMovieDetail.style.background = '';
    MovieDetailList.classList.remove('inactive');
    MovieDetailReturn.classList.remove('inactive');

    //another pages
    movieList.classList.add('inactive');
    headerContainerHomeTitle.classList.add('inactive');
    headerContainerHomeSearch.classList.add('inactive');
    containerHome.classList.add('inactive');
    conatinerHomeCategories.classList.add('inactive');
    headerContainerHomeSearch.classList.add('inactive');
    headerColor.classList.remove('header-container--categories');
}
const searchPage = () => {
    console.log('BUSQUEDAS');
    //search
    headerContainerHomeSearch.classList.remove('inactive');
    MovieDetailReturn.classList.remove('inactive');
    movieList.classList.remove('inactive');
    //another pages
    headerContainerTitle.classList.add('inactive');
    headerColor.classList.remove('header-container--categories');
    headerContainerHomeTitle.classList.add('inactive');
    containerHome.classList.add('inactive');
    conatinerHomeCategories.classList.add('inactive');
    headerContainerMovieDetail.classList.add('inactive');
    headerContainerMovieDetail.style.background = '';
    MovieDetailList.classList.add('inactive');
}
const trendsPage = () => {
    console.log('TRENDS');
    //home
    headerContainerHomeTitle.classList.remove('inactive');
    headerContainerHomeSearch.classList.remove('inactive');
    containerHome.classList.remove('inactive');
    conatinerHomeCategories.classList.remove('inactive');
    headerContainerHomeSearch.classList.remove('inactive');
    //another pages
    headerColor.classList.remove('header-container--categories');
    headerContainerMovieDetail.classList.add('inactive');
    headerContainerMovieDetail.style.background = '';
    MovieDetailList.classList.add('inactive');
    MovieDetailReturn.classList.add('inactive');
    movieList.classList.add('inactive');
}