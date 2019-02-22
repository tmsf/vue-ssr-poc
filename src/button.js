const Vue = require('vue')

module.exports = function (context) {
  const type = 'primary'
  const modifier = 'some-modifier'
  const metadata = { some: 'data', in_json: 'format' }


  cosnt component = new Vue({
    data: {
      url: context.url,

      type: 'primary',
      className: `Button Button--${type} ${modifier}`,
      text: 'some title text',
      link: context.url,
      metadata: JSON.stringify(metadata)
    },
    template: `
      <a :class="className" :href="link" :title="text" type="button" :data-tracking-data="metadata" >{{ text }}</a>
    `
  })

  return component
}
