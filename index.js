const express = require('express')
const app = express()
const port = 3000
const vueButton = require('./src/button')

const { createRenderer } = require('vue-server-renderer')

app.get('/', (req, res) => {
  const example = vueButton({ url: 'foo' })
  const renderer = createRenderer({})

  renderer.renderToString(example, (err, html) => {
    if (err) console.log('err', err)
    res.end(html)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
