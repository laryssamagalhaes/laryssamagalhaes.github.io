var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var cssglobbing = require('gulp-css-globbing');
var autoprefixer = require('gulp-autoprefixer');
var cmq = require('gulp-merge-media-queries');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

gulp.task('default', ['sass','imagemin', 'browser-sync', 'watch'], function(){});

gulp.task('sass', function () {
  return gulp.src('./app/assets/sass/main.scss')
  	.pipe(plumber())
  	.pipe(cssglobbing({
  		extensions: ['.scss']
  	}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    	browsers: ['not ie <= 8'],
    	cascade: false
    }))
    .pipe(concat('main.css'))
    .pipe(cmq())
    .pipe(cssnano())
    .pipe(gulp.dest('./assets/css'));
});


gulp.task('watch', function () {
  gulp.watch('./app/assets/sass/**/*.scss', ['sass', 'refresh']);
});

gulp.task('browser-sync', function () {
  	browserSync.init({
    	server: {
      		baseDir: './'
    	}
  	});
});

gulp.task('refresh', function () {
  	browserSync.reload();
});


gulp.task('imagemin', () =>
  gulp.src(['./app/assets/img/*.png', './app/assets/img/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'))
);
