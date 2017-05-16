var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

gulp.task('js', function () {
    return gulp.src(['src/jquery.tooltip.basic.js'])
        .pipe(uglify())
        .pipe(concat('jquery.tooltip.basic.min.js'))
        .pipe(gulp.dest('src'))
});

gulp.task('css', function () {
    return gulp.src(['css/jquery.tooltip.basic.css'])
        .pipe(minifyCSS())
        .pipe(concat('jquery.tooltip.basic.min.css'))
        .pipe(gulp.dest('css'))
});

gulp.task('default', [
    'js',
    'css'
]);
