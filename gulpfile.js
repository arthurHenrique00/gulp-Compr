const gulp = require('gulp');
const CompSCSS = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const ImgMin = require('gulp-imagemin');

function compilSASS() {
    return gulp.src('./src/styles/*.scss')
        .pipe(CompSCSS())
        .pipe(gulp.dest('./build/styles'))
}

function comprimeJS() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function imageCOMP() {
    return gulp.src('./src/img/*')
        .pipe(ImgMin())
        .pipe(gulp.dest('./build/img'))
}


exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false},gulp.series(compilSASS));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false},gulp.series(comprimeJS));
    gulp.watch('./src/img/*', {ignoreInitial: false},gulp.series(imageCOMP));
}