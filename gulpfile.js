let gulp 	= require('gulp'),
	sass	= require('gulp-sass'),
	watch 	= require('gulp-watch');

gulp.task('sass', () => {
	gulp.src('src/Styles/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/Styles/Css'))
});

gulp.task('watch', () => {
	gulp.watch('src/Styles/main.scss', ['sass'])
})