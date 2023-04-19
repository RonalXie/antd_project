const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#ea4c89',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
            'warning-color':'#FFD43A'
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})
