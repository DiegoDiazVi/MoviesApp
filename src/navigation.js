import {  getTrendingMoviesPreview, getCategoriesPreview, getMoviesByCategory, getNameMovies, getTrendingMoviesPage } from "./main.js";
import {headerContainerHomeTitle, containerHome, conatinerHomeCategories, headerContainerMovieDetail, MovieDetailList, headerColor, headerContainerHomeSearch, MovieDetailReturn, movieList, headerContainerTitle, btnSearch, btnReturn, btnSeemore, titleCategory, inputSearch } from './nodes.js';


const searchMovie = () => {
    
    location.hash = `#search=${inputSearch.value}`;
}
const returnHome = () => {
    location.hash = '#home'
}
const goTrends = () => {
    location.hash = '#trends'
}

btnSearch.addEventListener('click', searchMovie);
btnReturn.addEventListener('click', returnHome);
btnSeemore.addEventListener('click', goTrends);

const navigator = () => {

    location.hash.startsWith('#trends')     ? trendsPage() : 
    location.hash.startsWith('#search=')    ? searchPage() : 
    location.hash.startsWith('#movie=')     ? moviesPage() :
    location.hash.startsWith('#category=')  ? categoriesPage() : 
    homePage();

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
    headerContainerTitle.classList.add('inactive');
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
    
    const [categoryHash, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');

    titleCategory.innerHTML = categoryName;
    getMoviesByCategory(categoryId);
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
    const [_, nameMovie] = location.hash.split('=');
    getNameMovies(nameMovie);
}
const trendsPage = () => {
    console.log('TRENDS');
    //Categorias
    headerColor.classList.add('header-container--categories');
    MovieDetailReturn.classList.remove('inactive');
    movieList.classList.remove('inactive');
    headerContainerTitle.classList.remove('inactive');
    titleCategory.innerHTML = 'Tendencias'
    //another pages
    headerContainerHomeTitle.classList.add('inactive');
    headerContainerHomeSearch.classList.add('inactive');
    containerHome.classList.add('inactive');
    conatinerHomeCategories.classList.add('inactive');
    headerContainerHomeSearch.classList.add('inactive');
    headerContainerMovieDetail.classList.add('inactive');
    headerContainerMovieDetail.style.background = '';
    MovieDetailList.classList.add('inactive');
    getTrendingMoviesPage();
}