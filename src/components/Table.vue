<template>
    <div id="table">
      <ball></ball>
      <player></player>
    </div>
</template>

<script>
import ball from '../components/table-objects/Ball'
import player from '../components/table-objects/Player'

export default {
  name: 'table',
  components: {
    ball,
    player
  }
}
</script>

<style scoped>
</style>
