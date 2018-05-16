const ReaderSvg    = require('@resource-sentry/reader-svg'),
      WriterEs2015 = require('@resource-sentry/writer-es2015');

module.exports = {
    config: {
        input : [
            new ReaderSvg({
                entry: 'asset'
            })
        ],
        output: new WriterEs2015({
            path: './src/model'
        })
    },

    settings: {
        watch: true
    }
};
