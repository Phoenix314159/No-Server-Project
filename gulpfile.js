const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*'],
        replaceString: /\bgulp[\-.]/,
        lazy: true,
        camelize: true
    }),
    cachebust = new $.cachebust();


gulp.task('views', () => {
    return gulp.src('./client/views/**/*')
        .pipe($.htmlmin({
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true,
        }))
        .pipe(gulp.dest('./dist/views'))
});


gulp.task('build-js', () => {
    return gulp.src('./client/js/**/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.print())
        .pipe($.babel({presets: ['es2015']}))
        .pipe($.concat('bundle.js'))
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('build', ['views', 'build-js'], () => {
    return gulp.src('./client/index.html')
        .pipe(cachebust.references())
        .pipe($.htmlmin({
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    return gulp.watch(['./client/index.html', './client/js/**/*.js', './client/styles/*.css'], ['build']);
});

gulp.task('default', ['build', 'watch']);


