const ReaderProperties = require('@resource-sentry/reader-properties'),
      ReaderSvg        = require('@resource-sentry/reader-svg'),
      WriterEs2015     = require('@resource-sentry/writer-es2015');

module.exports = {
    config: {
        input : [
            new ReaderProperties({
                entry: './data/heroes.properties'
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
