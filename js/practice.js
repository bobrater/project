let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''); 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
let rateOfLastMovie = prompt('На сколько оцените его?', '');
personalMovieDB.movies = {
    lastMovie: rateOfLastMovie
};
console.log(personalMovieDB);