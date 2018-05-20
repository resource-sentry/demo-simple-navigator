const ReaderJson   = require('@resource-sentry/reader-json'),
      ReaderSvg    = require('@resource-sentry/reader-svg'),
      WriterEs2015 = require('@resource-sentry/writer-es2015');

module.exports = {
    config: {
        input : [
            new ReaderJson({
                entry: './data'
            }),
            new ReaderSvg({
                entry: 'asset'
            })
        ],
        output: new WriterEs2015({
            path: './src/model'
        })
    }
};
