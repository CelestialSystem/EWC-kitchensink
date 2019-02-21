import gulp from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulpTasks');

gulp.task('default', ['help']);
