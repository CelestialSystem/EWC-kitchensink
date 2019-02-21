import gulp from 'gulp';
import runSequence from 'run-sequence';
import webpackConfig from '../webpack.config.babel';
import webpackStream from 'webpack-stream';

gulp.task('build:dev', () => {
    runSequence('html:dev');

    process.env.NODE_ENV = JSON.stringify('dev');

    return gulp.src('public/index.js')
        .pipe(webpackStream(webpackConfig.dev))
        .pipe(gulp.dest('dist'));
}).help = 'builds the dev bundle.';

gulp.task('build:prod', () => {
    runSequence('clean:prod', 'html:prod');

    process.env.NODE_ENV = JSON.stringify('prod');
    process.env.REACT_SPINKIT_NO_STYLES = JSON.stringify(false);

    return gulp.src('public/EWAWeb.jsx')
        .pipe(webpackStream(webpackConfig.prod))
        .pipe(gulp.dest('build'));
}).help = 'builds the prod bundle.';

gulp.task('build', () => {
    runSequence('build:prod', 'build:dev');
}).help = 'builds both the prod and dev bundle.';
