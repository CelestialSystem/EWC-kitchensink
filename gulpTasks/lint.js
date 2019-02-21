import eslint from 'gulp-eslint';
import gulp from 'gulp';

gulp.task('lint', () =>
    gulp.src(['public/**/*.jsx', 'public/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format()))
    .help = 'Check the linting as per the .eslint configuration of all the JS files.';
