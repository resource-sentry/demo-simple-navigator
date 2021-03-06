const BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
      path              = require('path'),
      VueLoaderPlugin   = require('vue-loader/lib/plugin'),
      webpack           = require('webpack');

const projectPackage = require('./package.json');

function getDefinePlugin(environment, version) {
    let config = {
        VERSION: JSON.stringify(version)
    };

    if (environment.NODE_ENV === 'production') {
        config['process.env'] = {'NODE_ENV': JSON.stringify('production')};
    }

    return new webpack.DefinePlugin(config);
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry  : './index.js',
    plugins: [
        new BrowserSyncPlugin({
            host  : 'localhost',
            port  : '8080',
            open  : false,
            server: {baseDir: ['.']}
        }),
        getDefinePlugin(process.env, projectPackage.version),
        new VueLoaderPlugin()
    ],
    module : {
        rules: [
            {
                resource: {
                    test   : /\.js$/,
                    include: [
                        path.resolve(__dirname, 'src')
                    ]
                },
                use     : {
                    loader : 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                resource: {
                    test: /\.vue$/
                },
                use     : {
                    loader : 'vue-loader',
                    options: {}
                }
            },
        ]
    },
    output : {
        path    : path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    }
};
