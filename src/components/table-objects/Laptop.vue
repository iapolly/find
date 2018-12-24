<template>
  <div class="table-object">
    <img id="laptop" v-on:dblclick="defaultImg = yellowImg" :src=defaultImg>
  </div>
</template>

<script>
    export default {
      name: "laptop",
      data: function () {
        return{
          defaultImg: "/static/img/Ноутбук0.png", 
          yellowImg: "/static/img/Ноутбук1.png"
        }
      }
    }
</script>

<style scoped>
  #laptop {
    width: 200px;
  }
</style>
