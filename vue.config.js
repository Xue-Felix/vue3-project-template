
const path = require("path")
module.exports = {
    chainWebpack: config => {
        config.module
            .rule("v5")
            .test(/v5.src.*?js$/)
            .use("babel-loader")
            .loader("babel-loader")
            .end();

        /** ========= 引入公共scss  start  ========= */
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
        /** ========= 引入公共scss  end  ========= */
    },
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/reset.scss'),
                path.resolve(__dirname, './src/styles/resources.scss'),
            ],
        })
}
