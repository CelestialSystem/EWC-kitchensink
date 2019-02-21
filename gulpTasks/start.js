import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('start', () =>
    runSequence('lint', 'build:dev', 'startServer:dev', 'watch'))
    .help = 'Start the build and run the dev server.';

gulp.task('start:t', () =>
    runSequence('lint', 'jest', 'build:dev', 'startServer:dev', 'watch'))
    .help = 'Start the build and run the dev server after running test cases.';

gulp.task('start:tth', () =>
    runSequence('lint', 'jest:threshold', 'build:dev', 'startServer:dev', 'watch'))
    .help = 'Start the build and run the dev server after running test cases with threshold check.';

gulp.task('start:tcc', () =>
    runSequence('lint', 'jest:cc', 'build:dev', 'startServer:dev', 'watch'))
    .help = 'Start the build and run the dev server after running test cases with code coverage.';

gulp.task('start:prod', () =>
    runSequence('lint', 'jest:threshold', 'build:prod', 'startServer:prod'))
    .help = 'Start the build and run the prod server after running test cases.';

gulp.task('start:prodQA', () =>
    runSequence('lint', 'build:prod', 'startServer:prod'))
    .help = 'Start the build and run the prod server after running test cases.';

gulp.task('start:all', () =>
    runSequence('lint', 'build:dev', 'startServer:dev', 'jest:threshold', 'build:prod', 'startServer:prod'))
    .help = 'To run both the severs simultaneously.';
