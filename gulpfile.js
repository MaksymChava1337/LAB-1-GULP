
let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));
let cleancss = require('gulp-clean-css');
let uglify = require('gulp-uglify');



// тут крч цсс мініфікується + копіюється + добавляю суфікс мін
function copyScss(done){

    gulp.src('./app/scss/style.scss')
    .pipe(sass({
        errorLogToConsole: true,
    }))
    .on('error', console.error.bind(console))
    .pipe(cleancss())
    //.pipe(rename({suffix: '.min'}))
    .pipe( gulp.dest('./dist/css') );

 done();
}

//мініфікація джс
function copyJs(done){
    gulp.src('./app/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))

    done();
}


import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export default () => (
	gulp.src('src/image/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/image'))
);


gulp.task(copyScss);
gulp.task(copyJs);


