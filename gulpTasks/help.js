import ghelp from 'gulp-showhelp';
import gulp from 'gulp';

gulp.task('help', () => {
    const task = ghelp.getArgv('task', 't');
    if (task !== null) {
        ghelp.show(task);
    } else {
        // Make sure to add new tasks here, since we are explicitly ordering them
        ghelp.show(
            'help', '', 'clean', '',

            'build:dev', 'build:prod', 'build',
            'clean:dev', 'clean:prod', 'clean',
            'html:dev', 'html:prod', 'html',
            'lint',
            'start', 'start:t', 'start:tth', 'start:tcc', 'start:prod', 'start:all',
            'startServer:dev', 'startServer:prod', 'startServer',
            'jest', 'jest:cc', 'jest:threshold',
            'watch'
        );
    }
}).help = {
    '': 'shows this help message.',
    '[ --task=t ]': 'shows help for the specified task. Alias: -t.',
};
