const path = require('path');
const HtmalWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//Aqui se prepara la entrada y salida del codigo html,css

module.exports={
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions: ['.js']
    },
    module:{
        rules:[{
            test: /\.js?$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader',
            }
        }]
    },
    plugins:[
        new HtmalWebPackPlugin({
            inject:true,
            template:'./public/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns:[{
                from: './src/styles/styles.css',
                to:''
            }]
        })
    ]
}