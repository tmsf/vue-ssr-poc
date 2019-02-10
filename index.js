const express = require('express')
const app = express()
const port = 3000
const vue = require('./src/app')

const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./src/config/webpack.config.js')

app.use(webpackMiddleware(webpack(webpackConfig)))

// renderer
// const serverBundle = require('./src/vue-ssr-server-bundle.json')

const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer({ /* options */ })

// const renderer = createBundleRenderer(serverBundle, {
//   runInNewContext: false // recommended
//   // template, // (optional) page template
//   // clientManifest // (optional) client build manifest
// })

//
app.get('/', (req, res) => {
  const app = vue({ url: 'foo' })

  renderer.renderToString(app, (err, html) => {
    if (err) console.log('err', err)
    res.end(html)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
