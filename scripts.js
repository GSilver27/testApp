/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('Доступ закрыт!');
    }
}

showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
    let questionLastFilm, questionFilmRating;
    const numberOfQuestions = 2;

    for (let i = 0; i < numberOfQuestions; i++) {

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
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
    }
}

writeYourGenres();

console.log(personalMovieDB);