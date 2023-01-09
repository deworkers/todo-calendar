const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.jsx', // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: 'bundle.js?v=[hash]', // название создаваемого файла
    },
    module: {
        rules: [
            //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/, // исключаем из обработки папку node_modules
                loader: 'babel-loader', // определяем загрузчик
                options: {
                    presets: ['@babel/preset-react'], // используемые плагины
                },
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css?v=[hash]',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        compress: false,
        port: 9000,
    },
    cache: false,
};
