var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssnano = require('cssnano'),
browserSync = require('browser-sync').create(), // https://www.npmjs.com/package/browser-sync
webpack = require('webpack');


gulp.task('default', function(){
	console.log("Default Gulp task.");
});

gulp.task('html', function(){
	console.log("Task regarding HTML");
});

gulp.task('css', function(){
	console.log("Task regarding styles");
	// return to let Gulp be aware when gulp.src() completes; gulp.src() is an asynchronous function
	return gulp.src('css/*.css')
		.pipe(postcss([autoprefixer, cssvars, nested, cssnano]))
		.pipe(gulp.dest('bundled/css'));
});

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: ".",
			directory: true			
		},
		port: 9999
	});

	watch('./*.html', function(){
		// gulp.start('html');
		browserSync.reload();
	});

	watch('css/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('js/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['css'], function() {
	return gulp.src('bundled/css/*.css').pipe(browserSync.stream());
});

gulp.task('scripts', function(callback) {
	webpack(require('./webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}

		console.log(stats.toString());
		callback();
	});
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});