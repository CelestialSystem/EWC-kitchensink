import CompressionPlugin from 'compression-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import Visualizer from 'webpack-visualizer-plugin';
import webpack from 'webpack';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports.dev = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './public/index.js',
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './public',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
        new Visualizer(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)(\?\S*)?$/,
                include: path.join(__dirname, 'public'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['es2015', 'react-hmre'],
                        plugins: ['transform-custom-element-classes', 'transform-es2015-classes'],
                    },
                }],
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        sourceMap: true,
                    },
                }],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'resolve-url-loader',
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'images/[name]',
                        fallback: 'file-loader',
                    },
                }],
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'fonts/[name]',
                        fallback: 'file-loader',
                    },
                }],
            },
        ],
    },
};

module.exports.prod = {
    devtool: 'source-map',
    entry: './public/EWAWeb.jsx',
    target: 'web',
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './public',
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            beautify: false,
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new Visualizer(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)(\?\S*)?$/,
                include: path.join(__dirname, 'public'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } },
                    ],
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{ loader: 'css-loader', options: { sourceMap: true } },
                        'resolve-url-loader',
                        { loader: 'sass-loader', options: { sourceMap: true } },
                    ],
                }),
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: '100000',
                        name: 'images/[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: 'fonts/[name].[ext]',
                    },
                }],
            },
        ],
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // }
};
