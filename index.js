const serverBundle = require('./dist/vue-ssr-server-bundle.json')

const express = require('express')
const app = express()
const port = 3000
// const vueButton = require('./src/componetns/button')

const { createBundleRenderer, createRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // recommended
  // template, // (optional) page template
  // clientManifest // (optional) client build manifest
})

app.get('/', (req, res) => {
  const context = {}

  renderer.renderToString(context, (err, html) => {
    if (err) console.log('err', err)
    res.end(html)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
