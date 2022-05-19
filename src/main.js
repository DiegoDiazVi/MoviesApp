import { API_KEY } from "./secrets.js";

const getTrendingMoviesPreview = async () =>{
    try {
        const response = await fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        const data = await response.json();
        const movies = data.results;
        const movieImgArticle = document.querySelector('#trendingPreview .container-carrousel');
        const fragment = new DocumentFragment();
        movies.forEach(movie => {
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

getTrendingMoviesPreview()