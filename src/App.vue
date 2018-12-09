<template>
  <router-view></router-view>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'
import WebFontLoader from 'webfontloader'

export default {
  name: 'App',
  directives: {
    Draggable
  },
  mounted () {
    WebFontLoader.load({
      google: {
        families: ['Roboto:100,300,400,500,700,900']
      },
      active: this.setFontLoaded
    })
  },
  methods: {
    setFontLoaded () {
      this.$emit('font-loaded')
    }
  }
}
</script>

<style>

</style>
