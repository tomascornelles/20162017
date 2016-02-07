var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');

gulp.task('templates', function() {
	gulp.src('./app/views/*.html')
	.pipe(gulp.dest('./dist/'));
});

gulp.task('sassmin', function () {
	gulp.src('./app/sass/*.sass')
	.pipe(sass())
	.pipe(concat('styles.css'))
	.pipe(nano())
	.pipe(gulp.dest('./dist/'));
});

gulp.task('cssmin', function () {
	gulp.src('./app/css/*.css')
	.pipe(concat('libs.css'))
	.pipe(gulp.dest('./dist/'));
});

gulp.task('jsmin', function () {
	gulp.src('./app/js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'));

	gulp.src('./app/js/libs/*.js')
	.pipe(concat('libs.js'))
	.pipe(gulp.dest('./dist/'));
});

gulp.task('server', function() {
	gulp.src('./dist/')
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('watch', function() {
	gulp.watch('./app/js/*.js', ['jsmin']);
	gulp.watch('./app/sass/*.sass', ['sassmin']);
	gulp.watch('./app/css/*.css', ['cssmin']);
	gulp.watch('./app/views/*.html', ['templates']);
});

gulp.task('default', ['templates', 'sassmin', 'cssmin', 'jsmin', 'server', 'watch']);
