import express from 'express';
import gulp from 'gulp';
import helmet from 'helmet';
// import https from 'https';
import path from 'path';
import rootDir from 'app-root-dir';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';

gulp.task('startServer:dev', () => {
    const app = express();
    const port = 4500;
    const baseDir = 'dist';
    const compiler = webpack(webpackConfig.dev);

    app.use(webpackMiddleware(compiler, {
        noInfo: true, publicPath: webpackConfig.dev.output.publicPath,
    }));
    app.use(webpackHotMiddleware(compiler));

    app.get('*.js', (req, res) => {
        if (req.url.indexOf('ext-modern-all') > -1) {
            res.sendFile(path.join(rootDir.get(), baseDir, req.url));
        }
    });
    app.get('*.css', (req, res) => {
        if (req.url.indexOf('theme-material-all') > -1) {
            res.sendFile(path.join(rootDir.get(), baseDir, req.url));
        }
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(rootDir.get(), baseDir, '/index.html'));
    });

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(rootDir.get(), baseDir, '/index.html'));
    // });

    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Listening on ${port}...`);
    });
}).help = 'To start the dev server.';

gulp.task('startServer:prod', () => {
    const app = express();
    const port = 3000;
    const baseDir = 'build';

    app.use(helmet());
    app.get('*.js', (req, res) => {
        if (req.url.indexOf('bundle') > -1) {
            res.set('Content-Type', 'application/octet-stream; charset=UTF-8');
            res.set('Content-Encoding', 'gzip');
            res.set('X-Content-Type-Options', 'no');
            res.sendFile(path.join(rootDir.get(), baseDir, '/bundle.js.gz'));
        }
    });

    app.get('*.css', (req, res) => {
        res.set('Content-Encoding', 'gzip');
        res.type('text/css; charset=UTF-8');
        res.removeHeader('Content-Length');
        res.removeHeader('Cache-Control');
        res.set('Vary', 'Accept-Encoding');
        res.sendFile(path.join(rootDir.get(), baseDir, '/bundle.css.gz'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(rootDir.get(), baseDir, '/EWAWeb.html'));
    });

    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Listening on ${port}...`);
    });
}).help = 'To start the prod server.';

gulp.task('startServer', () =>
    runSequence('startServer:prod', 'startServer:dev'))
    .help = 'To start the both Dev and Prod servers together.';

// const devApp = express();
// const prodApp = express();
//
// const devPort = 4500;
// const prodPort = 5400;
// const baseDirDev = 'dist';
// const baseDirProd = 'build';
//
// let compilerDev = webpack(webpackConfig.dev);
// let compilerProd = webpack(webpackConfig.prod);
//
// devApp.use(webpackMiddleware(compilerDev, {
//     noInfo: true, publicPath: webpackConfig.dev.output.publicPath,
// }));
// devApp.use(require('webpack-hot-middleware')(compilerDev));
//
// devApp.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, baseDirDev, '/EWAWeb.html'));
// });
//
// devApp.listen(devPort, () => {
//     console.log('Listening on '+ devPort +'...');
// });
//
// prodApp.use(helmet());
// //app.use(compression());
// prodApp.get('*.js', (req, res, next) => {
//     req.url = req.url + '.gz';
//     res.set('Content-Encoding', 'gzip');
//     res.set('X-Content-Type-Options', 'no');
//     next();
// });
//
// prodApp.get('*.css', (req, res) => {
//     res.set('Content-Encoding', 'gzip');
//     res.type("text/css; charset=UTF-8");
//     res.removeHeader('Content-Length');
//     res.removeHeader('Cache-Control');
//     res.set('Vary', 'Accept-Encoding');
//     res.sendFile(path.join(__dirname, baseDirProd, '/bundle.css.gz'));
// });
//
// prodApp.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, baseDirProd, '/EWAWeb.html'));
// });
//
// prodApp.listen(prodPort, () => {
//     console.log('Listening on '+ prodPort +'...');
// });
