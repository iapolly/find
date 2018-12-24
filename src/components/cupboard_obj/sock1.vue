<template>
    <div class="cupboard-object" v-draggable="draggableValue">
      <img src="/static/img/sock1.png" class="sock1">
    </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'
    export default {
        name: "sock1",
      directives:{
        Draggable
      }
    }
</script>

<style scoped>
.sock1{
  width: 100px;
}
</style>
