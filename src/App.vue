<template>
  <router-view></router-view>
</template>

<script>
import { Draggable } from 'draggable-vue-directive'

export default {
  name: 'App',
  directives: {
    Draggable
  }
}
</script>

<style>

</style>
