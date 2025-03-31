const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 'production' для сборки
    entry: './src/index.js', // Главный файл JavaScript
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // Имя собранного файла
        clean: true, // Очистка папки dist перед сборкой
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // Для работы с CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/i, // Для работы с изображениями
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон HTML
        }),
    ],
    devServer: {
        static: './dist', // Папка для работы сервера
        port: 3000, // Порт для локального сервера
        open: true, // Автоматическое открытие браузера
        hot: true,
    },
};
