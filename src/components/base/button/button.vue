<template lang="html">
  <a :class="className" :href="link" :title="text" type="button" :data-tracking-data="metadata" >{{ text }}</a>
</template>

<script>
export default {
  props: {
    data() {
      return {
        // html: 'autocomplete_rander_html',
        url: context.url,
        type: 'primary',
        className: `Button Button--${type} ${modifier}`,
        text: 'some title text',
        link: context.url,
        metadata: JSON.stringify(metadata)
      }
    },
  }
}
</script>


<style lang="css" scoped>
</style>
