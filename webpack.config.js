const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('assets/')
    .setPublicPath('/')
    .addStyleEntry('bootstrap', './src/scss/bootstrap.scss')
    .enableSassLoader()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
;

module.exports = Encore.getWebpackConfig();