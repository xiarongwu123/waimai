module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:4000',
                changeOriginL:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}