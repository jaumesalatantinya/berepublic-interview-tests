'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

var wFiles = ['./app/*.html', './app/css/*.css', './app/js/*.js', './app/img/*.*'];
var jsFiles = ['./app/js/*.js'];
var sassFiles = ['./app/css/*.scss'];

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('rbs', function() {
    browserSync.reload();
});

gulp.task('sass', function () {
  gulp.src('./app/css/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('jshint', function() {
    return gulp.src('')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['jshint']);
    gulp.watch(wFiles, ['rbs']);
    gulp.watch(sassFiles, ['sass', 'rbs']);
});

gulp.task('default', ['watch', 'serve', 'sass', 'jshint']);
