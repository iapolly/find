<template>
    <div id="table">
      <ball></ball>
      <player></player>
      <laptop></laptop>
      <lipstick></lipstick>
    </div>
</template>

<script>
import ball from '../components/table-objects/Ball'
import player from '../components/table-objects/Player'
import  laptop from './table-objects/Laptop'
import lipstick from './table-objects/Lipstick'

export default {
  name: 'table',
  components: {
    ball,
    player,
    laptop,
    lipstick
  }
}
</script>

<style scoped>
</style>
