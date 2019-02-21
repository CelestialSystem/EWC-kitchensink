import gulp from 'gulp';
import insertLines from 'gulp-insert-lines';
import runSequence from 'run-sequence';

gulp.task('html', () => {
    runSequence('html:prod', 'html:dev');
}).help = `Copies EWAWeb.html file from the app folder to
            either the dist or build folder, depending on the node environment.`;

gulp.task('html:prod', () => gulp.src('public/EWAWeb.html')
    .pipe(insertLines({
        before: /<\/head>$/,
        lineBefore: '<link rel="stylesheet" href="bundle.css"/>',
    }))
    .pipe(gulp.dest('build')))
    .help = 'Copies EWAWeb.html file from the app folder to the build folder';

gulp.task('html:dev', () =>
    gulp.src('public/index.html')
        .pipe(gulp.dest('dist')))
    .help = 'Copies index.html file from the app folder to the dist folder';
