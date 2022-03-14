let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

if (personalMovieDB.count <= 10 && personalMovieDB.count >0) {
    alert ('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >10 && personalMovieDB.count <=30) {
    alert ('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert ('Вы киноман');
} else {
    alert ('Произошла ошибка');
}

for (let i = 0; i < numberOfFilms; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = +prompt('На сколько оцените его?', '');
    if (a.length == 0 || a.length > 50 || a == null || b.length == 0 || b.length > 50 || b == null) {
        i--;
        console.log('error');
    } else {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }
}


console.log(personalMovieDB);