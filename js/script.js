"use strict";

let numberOfFilms;


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
        
    },
    checkWatchMovies: function(){
        if (personalMovieDB.count < 10) {
            alert('Посмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классный зритель!');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    lastMovies: function(){
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
    },
    showMyDb: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    whriteYuorGengres: function(){
        for (let i=1; i<=2; i++){
            const c = prompt(`Ваш любимый жанр под номером ${i}`);
        
            if (c != null && c != ""){
                personalMovieDB.genres[i-1] = c;
                console.log('Done!');
            } else {
                console.log('Error!');
                i--;
            }
        
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр ${i + 1} - это ${item}`);
        });
    },
    ubgradePrivat: function(){
        if(this.privat == true){
            this.privat = false;
        }else {
            this.privat = true;
        }
    } 
};
personalMovieDB.ubgradePrivat();





//checkWatchMovies();
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



console.log(personalMovieDB);