// Task 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
alert(numberOfFilms);

// Task 2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
console.log(personalMovieDB);

// Task 3
const questionLastFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
      questionFilmRating1 = prompt('На сколько оцените его?', ''),
      questionLastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      questionFilmRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[questionLastFilm1] = questionFilmRating1;
personalMovieDB.movies[questionLastFilm2] = questionFilmRating2;

console.log(personalMovieDB);