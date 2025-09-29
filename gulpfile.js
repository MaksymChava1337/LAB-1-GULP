


let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));
let cleancss = require('gulp-clean-css');


function copyScss(done){

    gulp.src('./app/scss/style.scss')
    .pipe(sass({
        errorLogToConsole: true,
    }))
    .on('error', console.error.bind(console))
    .pipe(cleancss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe( gulp.dest('./dist/css') );

 done();
}


gulp.task(copyScss);

