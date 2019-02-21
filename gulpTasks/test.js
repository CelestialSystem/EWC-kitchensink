import { argv } from 'yargs';
import gulp from 'gulp';
import jest from 'gulp-jest';

gulp.task('jest', () => {
    process.env.NODE_ENV = JSON.stringify('test');
    process.env.REACT_SPINKIT_NO_STYLES = JSON.stringify(true);

    return gulp.src('./').pipe(jest({
        automock: false,
        verbose: true,
        collectCoverageFrom: [
            'public/**/*.{js,jsx}',
            '!public/components/dashboard/Dashboard.jsx',
            '!public/style/mui-styles/**/*.{js}'
        ],
        testPathIgnorePatterns: [
            '<rootDir>/dist/', '<rootDir>/build/', '<rootDir>/node_modules/',
            '<rootDir>/docs/', '<rootDir>/gulpTasks/',
        ],
        moduleNameMapper: {
            '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/mocks/fileMock.js',
        },
        setupFiles: ['<rootDir>/tests/mocks/documentMock.js'],
    }));
}).help = 'To run the JEST test cases.';

gulp.task('jest:cc', () => {
    process.env.NODE_ENV = 'test';
    process.env.REACT_SPINKIT_NO_STYLES = JSON.stringify(true);
    return gulp.src('./').pipe(jest({
        collectCoverageFrom: [
            'public/**/*.{js,jsx}',
            '!public/components/dashboard/Dashboard.jsx',
            '!public/style/mui-styles',
        ],
        testPathIgnorePatterns: [
            '<rootDir>/dist/', '<rootDir>/build/', '<rootDir>/node_modules/',
            '<rootDir>/docs/', '<rootDir>/gulpTasks/',
        ],
        moduleNameMapper: {
            '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/mocks/fileMock.js',
        },
        setupFiles: ['<rootDir>/tests/mocks/documentMock.js'],
        collectCoverage: true,
        automock: false,
    }));
}).help = 'To run the JEST test cases with code coverage.';

gulp.task('jest:ccs', () => {
    process.env.NODE_ENV = 'test';
    process.env.REACT_SPINKIT_NO_STYLES = JSON.stringify(true);

    return gulp.src(argv.folder).pipe(jest({
        testPathIgnorePatterns: [
            '<rootDir>/dist/', '<rootDir>/build/', '<rootDir>/node_modules/',
            '<rootDir>/docs/', '<rootDir>/gulpTasks/',
        ],
        collectCoverageFrom: [
            'public/**/*.{js,jsx}',
            '!public/components/dashboard/Dashboard.jsx',
            '!public/style/mui-styles',
        ],
        moduleNameMapper: {
            '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/mocks/fileMock.js',
        },
        automock: false,
    }));
}).help = 'To run the JEST test cases with code coverage.';

gulp.task('jest:threshold', () => {
    process.env.NODE_ENV = JSON.stringify('test');
    process.env.REACT_SPINKIT_NO_STYLES = JSON.stringify(true);

    return gulp.src('./').pipe(jest({
        automock: false,
        collectCoverage: true,
        collectCoverageFrom: [
            'public/**/*.{js,jsx}',
            '!public/components/dashboard/Dashboard.jsx',
            '!public/style/mui-styles',
        ],
        testPathIgnorePatterns: [
            '<rootDir>/dist/', '<rootDir>/build/', '<rootDir>/node_modules/',
            '<rootDir>/docs/', '<rootDir>/gulpTasks/',
        ],
        moduleNameMapper: {
            '\\.(css|scss)$': '<rootDir>/tests/mocks/styleMock.js',
            '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/mocks/fileMock.js',
        },
        setupFiles: ['<rootDir>/tests/mocks/documentMock.js'],
        verbose: true,
        bail: true,
        coverageThreshold: {
            global: {
                branches: 90,
                functions: 90,
                lines: 90,
                statements: 90,
            },
        },
    }));
}).help = 'To run the JEST test cases with minimum threshold of 90%.';
