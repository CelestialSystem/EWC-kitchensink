import del from 'del';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('clean', () => {
    runSequence('clean:prod', 'clean:dev');
}).help = 'Deletes the previous builds for both PROD and DEV.';

gulp.task('clean:dev', () => del('dist/**/*', '!dist/ext/**/*')).help = 'Deletes the previous builds of DEV.';

gulp.task('clean:prod', () => del('build/**/*')).help = 'Deletes the previous builds of PROD.';
