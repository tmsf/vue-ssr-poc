const express = require('express')
const app = express()
const port = 3000
const vueExample = require('./src/app')

const { createRenderer } = require('vue-server-renderer')

app.get('/', (req, res) => {
  const example = vueExample({ url: 'foo' })
  const renderer = createRenderer({})

  renderer.renderToString(example, (err, html) => {
    if (err) console.log('err', err)
    res.end(html)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
