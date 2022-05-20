import { API_KEY } from "./secrets.js";
import {headerColor, movieList, headerContainerTitle} from './nodes.js';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    Headers: {
        'Content-Type' : 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    },
});

export const getTrendingMoviesPreview = async () =>{
    try {
        
        // using fetch
        /*const response = await fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        const data = await response.json();
        */
        
       //Using Axios
        const { data } = await api ('/trending/movie/day');
        const movies = data.results

        const movieImgArticle = document.querySelector('#trendingPreview .container-carrousel');
        movieImgArticle.innerHTML = '';
        const fragment = new DocumentFragment();
        movies.map(movie => {
            const movieContainer = document.createElement('figure');
            movieContainer.classList.add('container-img');
            const movieImg = document.createElement('img');
            movieImg.classList.add('images');
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute('src','https://www.themoviedb.org/t/p/w300'+ movie.poster_path);
    
            movieContainer.appendChild(movieImg);
            fragment.appendChild(movieContainer);
        });
        movieImgArticle.appendChild(fragment);
    } catch (error) {
        console.log(error);
    }
}

export const getCategoriesPreview = async () => {
    try {

        //Using fetch
        /*const response = await fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        const data = await response.json(); */

        //using Axios
        const { data } = await api('/genre/movie/list')
        const genres = data.genres;
        const fragment = new DocumentFragment();
        const genreArticle = document.querySelector('#categoriesPreview .container-subcategories');
        genreArticle.innerHTML = '';
        genres.map(genre =>{
            const containerGenre = document.createElement('div');
            containerGenre.classList.add('container-subcategories--name');
            const colorGenre = document.createElement('div');
            colorGenre.classList.add('color');
            colorGenre.setAttribute('id', 'id'+genre.id)
            const genreTitle = document.createElement('h3');
            genreTitle.classList.add('name-categories');
            genreTitle.addEventListener('click', () =>{
                location.hash = `#category=${genre.id}-${genre.name}`;
            })
            const genreTitleText = document.createTextNode(genre.name);

            genreTitle.appendChild(genreTitleText);
            containerGenre.append(colorGenre,genreTitle);
            fragment.appendChild(containerGenre);
        })
        genreArticle.appendChild(fragment);

    } catch (error) {
        console.log(error)
    }
}

export const getMoviesByCategory = async (id) =>{
    try {
        const { data } = await api('/discover/movie', {
            params:{
                with_genres: id,
            }
        });
        const categories = data.results;
        console.log(categories);
        const categoryImgArticle = document.querySelector('.movieList-container  .container-list');
        const fragment = new DocumentFragment();
        categoryImgArticle.innerHTML = '';
        categories.map( categorie => {
            const categoryContainer = document.createElement('figure');
            categoryContainer.classList.add('container-img--list');
            const categoryImg = document.createElement('img');
            categoryImg.classList.add('images');
            categoryImg.setAttribute('alt', categorie.title);
            categoryImg.setAttribute('src','https://www.themoviedb.org/t/p/w300'+ categorie.poster_path);
    
            categoryContainer.appendChild(categoryImg);
            fragment.appendChild(categoryContainer);
        })
        categoryImgArticle.appendChild(fragment);
    } catch (error) {
        
    }
}