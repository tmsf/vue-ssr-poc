// const Button = require('./button')
const Vue = require('vue')


const VueLoaderPlugin = require('vue-loader/lib/plugin')


const button = () => {
  Vue.component('button', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  })
}

module.exports = button
