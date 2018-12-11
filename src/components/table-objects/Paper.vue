<template>
  <div class="table-object">
    <img class="paper" src="/static/img/Paper.png">
  </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'
    export default {
      name: "Paper",
      directives: {
        Draggable
      }
    }

</script>

<style scoped>
  .paper {
    width: 70px;
  }
</style>
