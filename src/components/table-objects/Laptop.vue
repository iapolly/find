<template>
  <div class="table-object">
    <img id="laptop" v-on:dblclick="defaultImg = yellowImg" :src=defaultImg>
  </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'
    export default {
      name: "laptop",
      data: function () {
        return{
          defaultImg: "/static/img/Ноутбук0.png", 
          yellowImg: "/static/img/Ноутбук.png"
        }
      },
      directives: {
        Draggable
      }
    }
</script>

<style scoped>
  #laptop {
    width: 300px;
  }

</style>
