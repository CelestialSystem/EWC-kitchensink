import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('watch', () => {
    gulp.watch(['./public/**/*.jsx', './public/**/*.js'], () => {
        runSequence('lint');
    });
}).help = 'Keep a watch on the written code, only the linting will be checked.';
