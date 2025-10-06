let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));
let cleancss = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
let browsersync = require('browser-sync').create();


// тут крч цсс мініфікується + копіюється + добавляю суфікс мін
function copyScss(done){

    gulp.src('./app/scss/style.scss')
    .pipe(sass({
        errorLogToConsole: true,
    }))
    .on('error', console.error.bind(console))
    .pipe(cleancss())
    .pipe(rename({suffix: '.min'}))
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

//мініфікація картинок 
function img(done){
    return gulp.src('app/image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/image'))

    done();
}





gulp.task(copyScss);
gulp.task(copyJs);

gulp.task(img);


