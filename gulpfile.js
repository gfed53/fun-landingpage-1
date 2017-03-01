var gulp = require('gulp');

var sass = require('gulp-sass');

var paths = {
	sass: './sass/*.sass',
	allSass: './sass/**/*.sass',
	css: './css'
};

//CURRENT BUILD ISSUE, DO NOT USE

// Compile SASS

gulp.task('sass', function(){
	return gulp.src(paths.sass)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest(paths.css));
});

// Watch
gulp.task('watch', function(){
	gulp.watch(paths.allSass, ['sass']);
});

//Default
gulp.task('default', ['sass', 'watch']);