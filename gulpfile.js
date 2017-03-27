var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	sass: './sass/*.sass',
	allSass: './sass/**/*.sass',
	// preCSS: './sass/pre-css/pre-styles.css'
	css: './css'
};

// Compile SASS

gulp.task('sass', function(){
	return gulp.src(paths.sass)
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest(paths.css));
});

gulp.task('autoprefixer', function() {
    gulp.src('/css/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.css));
});

// Watch
gulp.task('watch', function(){
	gulp.watch(paths.allSass, ['sass']);
});

//Default
gulp.task('default', ['sass', 'watch']);