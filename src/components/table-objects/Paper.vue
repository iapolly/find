<template>
  <div class="table-object">
    <img id="ball" v-draggable src="/static/img/Paper.png">
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
  #ball {
    width: 70px;
  }
</style>
