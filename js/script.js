"use strict";

const numberOgFilms = prompt ('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOgFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''),
      b = prompt ('Насколько оцените его?', ''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d = prompt ('Насколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);