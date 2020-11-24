module.exports = {
    devServer: {
        '/api': {
            target: 'https://www.wumeili.top',
            changeOrigin: true, //是否跨域
            secure: false,
            pathRewrite: {
                '/api': 'https://www.wumeili.top'
            }
        }
    }
}