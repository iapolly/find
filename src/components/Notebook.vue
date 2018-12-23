<template>
  <div id="magazine">
    <div id="first-page">
      <h1>Open me</h1>
    </div>
    <div id="second-page">

    </div>
    <div id="third-page"><span class="text">Page 3</span></div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import '../lib/turn.min';
  import VueSticker from 'vue-sticker'
    export default {
      name: "Notebook",
      mounted () {
        $('#magazine').turn({gradients: true, acceleration: true});
      },
      components: {
        VueSticker
      }
    }
</script>

<style scoped>
  h1 {
    position: relative;
    text-align:  center;
  }
  #magazine{
    width: 700px;
    height: 400px;
    position: absolute;
    top: 100px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  #magazine .turn-page{
    background-color:#ccc;
  }
  #magazine div {
    background-color: gold;
  }
</style>
