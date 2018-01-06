var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssnano = require('cssnano');

gulp.task('styles', function(){
	console.log("Task regarding styles");
	// return to let Gulp be aware when gulp.src() completes; gulp.src() is an asynchronous function
	return gulp.src('./app/assets/css/*.css')
		.pipe(postcss([autoprefixer, cssvars, nested, cssnano]))
		.pipe(gulp.dest('./app/assets/bundled/css'));
});