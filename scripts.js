/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

"use strict";
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

let questionLastFilm, questionFilmRating;
const numberOfQuetions = 2;

// for (let i = 0; i < numberOfQuetions; i++) {

//     questionLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//     questionFilmRating = prompt('На сколько оцените его?', '');

//     if (questionLastFilm != '' && questionFilmRating != '' &&
//     questionLastFilm != null && questionFilmRating != null &&
//     questionLastFilm.length <= 50 && questionFilmRating <= 50) {
//         personalMovieDB.movies[questionLastFilm] = questionFilmRating;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

let i = 0; 
do {
    
    questionLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    questionFilmRating = prompt('На сколько оцените его?', '');

    if (questionLastFilm != '' && questionFilmRating != '' &&
    questionLastFilm != null && questionFilmRating != null &&
    questionLastFilm.length <= 50 && questionFilmRating <= 50) {
        personalMovieDB.movies[questionLastFilm] = questionFilmRating;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

    i++;
} while (i < numberOfQuetions);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);