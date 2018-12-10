<template>
    <div id="table">
      <ball></ball>
      <player></player>
      <paper></paper>
      <laptop></laptop>
      <lipstick></lipstick>
      <paper></paper>
      <paper></paper>
      <paper></paper>
    </div>
</template>

<script>
import ball from '../components/table-objects/Ball'
import player from '../components/table-objects/Player'
import  laptop from './table-objects/Laptop'
import lipstick from './table-objects/Lipstick'
import paper from './table-objects/Paper'

export default {
  name: 'table',
  components: {
    ball,
    player,
    laptop,
    lipstick,
    paper
  }
}
</script>

<style scoped>

</style>
