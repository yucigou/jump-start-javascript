var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssnano = require('cssnano');

gulp.task('default', function(){
	console.log("Default Gulp task.");
});

gulp.task('html', function(){
	console.log("Task regarding HTML");
});

gulp.task('css', function(){
	console.log("Task regarding styles");
	// return to let Gulp be aware when gulp.src() completes; gulp.src() is an asynchronous function
	return gulp.src('css/005-gulp.css')
		.pipe(postcss([autoprefixer, cssvars, nested, cssnano]))
		.pipe(gulp.dest('css/compiled'));
});

gulp.task('watch', function(){
	watch('./004-gulp.html', function(){
		gulp.start('html');
	});

	// watch('css/**/*.css', function(){
	watch('css/*.css', function(){
		gulp.start('css');
	})
});