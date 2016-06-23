'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var historyApiFallback = require('connect-history-api-fallback');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

gulp.task('sass', function() {
   gulp.src('./source/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./build'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build'));
});

gulp.task('compile-react', function() {
	return gulp.src('./source/main.jsx')
		.pipe(plumber())
		.pipe(webpack({
        output: {
          filename: 'main.js'
        },
        module: {
          loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }]
        }
      }))
		.pipe(gulp.dest('./build'));
});

gulp.task('build-html', function() {
  gulp.src('./source/index.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', ['compile-react', 'build-html', 'sass'], function() {

	browserSync.init({
		server: {
      baseDir: './build/',
      middleware: [historyApiFallback()]
    }
	});

	gulp.watch(['./source/main.jsx',  './source/components/*.jsx'], ['compile-react']);
  gulp.watch(['./source/index.html'], ['build-html']);
  gulp.watch(['./source/sass/*.scss', './source/style.scss'], ['sass']);
	gulp.watch(['./build/main.js', './build/index.html', './build/*.min.css']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
