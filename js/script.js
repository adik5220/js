"use strict";

let numberOfFilms;



function start(){
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
    
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};



function checkWatchMovies(){
    if (personalMovieDB.count < 10) {
        alert('Посмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классный зритель!');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}



checkWatchMovies();
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



function lastMovies(){
    for (let i=0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        }
    
    }
}

lastMovies();

function showMyDb(){
    if(personalMovieDB.privat != false){
        console.log(personalMovieDB);
    }else {
        console.log("Privat user!!!");
    }
}
showMyDb();

function whriteYuorGengres(){
    for (let i=1; i<=3; i++){
        const c = prompt(`Ваш любимый жанр под номером ${i}`);
    
        if (c != null && c != ""){
            personalMovieDB.genres[i-1] = c;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        }
    
    }
}
whriteYuorGengres();