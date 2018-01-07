var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(); // https://www.npmjs.com/package/browser-sync

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: "./app/",
			directory: true			
		},
		port: 9999
	});

	watch('./app/*.html', function(){
		// gulp.start('html');
		browserSync.reload();
	});

	watch('./app/assets/css/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/js/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/assets/bundled/css/*.css').pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});

