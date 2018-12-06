const webpack = require('webpack') //引入webpack
const path = require('path') //处理文件路径的模块
const fs = require('fs') //处理文件的模块
const package = require('../package') //引入package.json
const VueLoaderPlugin = require('vue-loader/lib/plugin') //用于处理.vue文件
const HtmlWebpackPlugin = require('html-webpack-plugin') //生成HTML文件存放在某目录下
const CleanWebpackPlugin = require('clean-webpack-plugin') //在打包前清除之前文件，生成新的带hash值文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin") //打包css插件

//定义打包后那些模块不如要编译到app.js，打包后需要CND引入，入上面HTML模板script引入
const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'lodash': '_',
    'axios': 'axios',
    'moment': 'moment',
    'xlsx':'XLSX'
}

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const config = {
    externals: {},
    //多入口配置
    entry: {},
    //配置模块如何解析
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: [' ', '.ts', '.vue', '.json', '.js', '.scss', '.css', 'less'],
        //模块别名定义，方便后续直接引用别名
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            api: resolve('src/api'), //比如 import UserApi from 'api/User'
        }
    },
    //打包后的配置
    output: {
        //通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
        path: path.resolve('dist'),
        //编译生成的js文件存放到根目录下面的js目录下面,如果js目录不存在则自动创建
        filename: "js/[name].[hash].js",
        // chunkCallbackName: "js/[name].[hash].js"
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1300
    },
    //插件使用位置
    plugins: [
        new CleanWebpackPlugin(['dist/**'], {
            root: resolve('/'),
            verbose: true
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        //定义的规则会匹配module的创建
        rules: [{
                test: /\.ts$/,
                loader: 'tslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production' ?
                    'vue-style-loader' :
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    }
    // devServer: {
    //     inline:true,
    //     compress:true,
    //     host:'0.0.0.0',
    //     port:8085,
    //     historyApiFallback:true,
    // }
}

var filelist = fs.readdirSync('./')
filelist.forEach((file) => {
    if (path.extname(file) == '.html') {
        var filename = path.basename(file).replace('.html', '');
        config.entry[filename] = `./src/${filename}.ts`
        config.plugins.push(new HtmlWebpackPlugin({
            chunks: [filename],
            filename: resolve('dist/' + filename + '.html'),
            template: './' + filename + '.html',
            inject: 'body'
        }))
    }
})
var dep = Object.assign(package.devDependencies ? package.devDependencies : {}, package.dependencies ? package.dependencies : {})
Object.keys(dep).forEach((pkg) => {
    if (externals[pkg]) {
        config.externals[pkg] = externals[pkg]
    }
})
module.exports = config;