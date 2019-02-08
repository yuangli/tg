const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
var pump = require('pump');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const reload = browserSync.reload;
const del = require('del');

gulp.task('default', ['live']);

gulp.task('html', () => {
  del(['./build/*.html']);
  return gulp.src('src/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('css', () => {
  del(['./build/css/*.+(css|map)']);
  return gulp.src('src/dist/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/dist/css/'));
});

gulp.task('js', function(cb) {
  // del(['./build/js/*.+(js|map)']),
    pump([
      gulp.src('src/dist/js/*.js'),
      uglify(),
      gulp.dest('build/dist/js/')
    ],
    cb
    );
});

gulp.task('img', () => {
  del(['./build/img/*']);
  return gulp.src('src/dist/img/*')
    .pipe(gulp.dest('build/dist/img/'));
});


gulp.task('live', ['html', 'css', 'js', 'img'], function () {
  browserSync.init({
    server: "./build/"
  });
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['js']);
  gulp.watch(['./src/js/*.js', './src/css/*.css', './src/index.html']).on('change', browserSync.reload);
});
